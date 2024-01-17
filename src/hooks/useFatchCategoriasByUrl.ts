// useFetchFilme.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { CategoriaObject } from "../types";

const useFetchCategoriasByUrl = (url_categoria: string) => {
    const [data, setData] = useState<CategoriaObject | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${url_categoria}`)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch((err) => {
                setError(err);
                setData(null);
            })
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
};

export default useFetchCategoriasByUrl;
