import PaginaFilme from "../components/Filme/PaginaFilme"
import { useParams } from 'react-router-dom';

function Filme() {
  const params = useParams();
  const filmeId = params.id
  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-start">
      {filmeId && 
        <PaginaFilme id_filme={parseInt(filmeId)}/>
      }
    </div>
  
  )
}

export default Filme
