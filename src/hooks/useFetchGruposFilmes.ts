import { useState, useEffect } from 'react';
import axios from 'axios';
import { SubCategoriaObject } from '../types';

const useFetchGruposFilmes = (id: number) => {
  const [data, setData] = useState<SubCategoriaObject[]|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/categoria/${id}/sub_categorias/`)
    
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

export default useFetchGruposFilmes;
