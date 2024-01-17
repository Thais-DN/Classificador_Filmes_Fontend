import { useState, useEffect } from "react";
import axios from "axios";
import { GrupoObject } from "../types";

const useFetchGrupos = () => {
    const [data, setData] = useState<GrupoObject[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8001/api/grupo/`)

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

export default useFetchGrupos;
