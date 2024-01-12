import { useParams } from "react-router-dom";
import useFetchSubCategorias from "../hooks/useFetchSubCategorias"
import SubCategoria from "../components/SubCategoria/SubCategoria";


function SubCategorias() {
  const params = useParams();
  const categoriaId = params.id ? parseInt(params.id):0

  const {data:subcategorias, error, loading} = useFetchSubCategorias(categoriaId)
  
  if(loading){
    return <div>Carregando...</div>
  }

  if(error){
    return <div>{error}</div>
  }

  return (
    <div className=' flex justify-center items-center min-w-screen min-h-screen bg-slate-200'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:container gap-x-6 gap-y-9'>
            {subcategorias?.map((sub_categoria_obj, index)=>{
                return(
                    <SubCategoria key={index} subCategoriaObj={sub_categoria_obj}/>
                )
            })}
        </div>
    </div>
  )
}

export default SubCategorias