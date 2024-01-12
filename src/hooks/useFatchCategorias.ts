// useFetchFilme.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CategoriaObject } from '../types';

const useFetchCategorias = () => {
  const [data, setData] = useState<CategoriaObject[]|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/categorias`)
      .then(response => {
        setData(response.data);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export default useFetchCategorias;