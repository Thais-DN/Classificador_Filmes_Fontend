import { Link } from 'react-router-dom'
import { SubCategoriaObject } from '../../types'

interface Props{
  subCategoriaObj: SubCategoriaObject
}

function SubCategoria({subCategoriaObj}:Props) {
  return (
    <Link className='col-span-1 flex justify-center items-center flex-col hover:cursor-pointer' to={`/categoria/sub_categorias/${subCategoriaObj.id}`}>
        <div className='w-32 lg:w-64'><img className='rounded-full shadow-lg' src={subCategoriaObj.imagem} alt={subCategoriaObj.nome} /></div>
        <div className='text-lg font-semibold'>
            {subCategoriaObj.nome}
        </div>
    </Link>
  )
}

export default SubCategoria