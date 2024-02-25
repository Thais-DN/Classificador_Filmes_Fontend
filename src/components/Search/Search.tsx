import React, { useState, useEffect } from "react";
import { GrupoObject } from "../../types";

interface SearchProps {
    grupos: GrupoObject[];
    onSearch: (filteredGrupos: GrupoObject[]) => void;
}

const Search: React.FC<SearchProps> = ({ grupos, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const normalizedSearchTerm = searchTerm
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        const filtered = grupos.filter((grupo) =>
            grupo.nome
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(normalizedSearchTerm)
        );
        onSearch(filtered);
    }, [searchTerm, grupos, onSearch]);

    return (
        <div className="flex items-center w-full justify-center p-5">
            <form className="flex gap-2 w-4/5 border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-slate-950 bg-slate-00 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-slate-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Busque sua animação..."
                />
                <button
                    type="submit"
                    className="px-4 text-slate-100 bg-slate-900 border-l rounded"
                >
                    Buscar
                </button>
            </form>
        </div>
    );
};

export default Search;
