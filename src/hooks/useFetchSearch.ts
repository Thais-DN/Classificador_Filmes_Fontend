import { useState, useEffect } from "react";
import axios from "axios";
import { FilmeObject } from "../types";

const useFetchSearch = (searchTerm: string) => {
    const [data, setData] = useState<FilmeObject[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            axios
                .get(
                    `http://localhost:8001/api/filmes/search/${encodeURIComponent(
                        searchTerm
                    )}/`
                )
                .then((response) => {
                    setData(response.data);
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                    setData([]);
                })
                .finally(() => setLoading(false));
        } else {
            // Se não houver termo de pesquisa, resetamos os dados
            setData([]);
        }
    }, [searchTerm]);

    return { data, loading, error };
};

export default useFetchSearch;
