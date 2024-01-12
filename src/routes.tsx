import { createBrowserRouter } from 'react-router-dom'
import Filme from './pages/Filme';
import Home from './pages/Home';
import SubCategorias from './pages/SubCategorias';
import GrupoFilmes from './pages/GruposFilmes';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/categoria/:id",
      element: <SubCategorias/>,
    },
    {
      path: "/categoria/sub_categorias/:id",
      element: <GrupoFilmes/>,
    },
    {
      path: "/filme/:id",
      element: <Filme/>,
    },
  ]);

