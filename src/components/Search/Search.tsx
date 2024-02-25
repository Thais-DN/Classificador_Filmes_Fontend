import React, { useState } from "react";
import useFetchSearch from "../../hooks/useFetchSearch";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, loading, error } = useFetchSearch(searchTerm);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div className="flex items-center w-full justify-center p-5">
            <form
                onSubmit={handleSearch}
                className="flex gap-2 w-4/5 border-purple-200 rounded"
            >
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-slate-950 bg-slate-00 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-slate-700"
                    placeholder="Busque sua animação..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 text-slate-100 bg-slate-900 hover:bg-slate-700 border-l rounded "
                >
                    Buscar
                </button>
            </form>
            {loading && <p>Carregando...</p>}
            {error && <p>Ocorreu um erro: {error.message}</p>}
            {/* Renderização condicional dos resultados da pesquisa */}
            {!loading && !error && data && (
                <div>{/* Renderize os resultados da pesquisa aqui */}</div>
            )}
        </div>
    );
};
export default Search;
