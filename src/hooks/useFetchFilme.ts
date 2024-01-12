// useFetchFilme.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FilmeObject } from '../types';

const useFetchFilme = (id: number) => {
  const [data, setData] = useState<FilmeObject|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/filmes/${id}/`)
      .then(response => {
        setData(response.data);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
}

export default useFetchFilme;
