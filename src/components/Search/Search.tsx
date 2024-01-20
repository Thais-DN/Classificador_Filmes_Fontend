import React, { useState } from "react";
import useFetchSearch from "../../hooks/useFetchSearch";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, loading, error } = useFetchSearch(searchTerm);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode usar os dados da pesquisa como necessário
        console.log(data);
    };

    return (
        <div className="flex items-center w-full justify-center p-5">
            <form
                onSubmit={handleSearch}
                className="flex border w-[30%] border-purple-200 rounded"
            >
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Busque sua animação..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 text-white bg-purple-600 border-l rounded "
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
