import { Link } from 'react-router-dom'
import { CategoriaObject } from '../../types'

interface Props{
    categoriaObj: CategoriaObject
}

function Categoria({categoriaObj}:Props) {
  return (
    <Link className='col-span-1 flex justify-center items-center flex-col hover:cursor-pointer' to={`/categoria/${categoriaObj.id}`}>
        <div className='w-32 lg:w-64'><img className='rounded-full shadow-lg' src={categoriaObj.imagem} alt={categoriaObj.nome} /></div>
        <div className='text-lg font-semibold'>
            {categoriaObj.nome}
        </div>
    </Link>
  )
}

export default Categoria