import useFetchFilme from '../../hooks/useFetchFilme'
import CartazFilme from '../CartazFilme/CartazFilme'

interface Props {
    id_filme:number
}

function PaginaFilme({id_filme}:Props) {
    const {data:filme, error, loading} = useFetchFilme(id_filme)

    if(loading){
        return <div>Carregando...</div>
    }

    if(error){
        return <div>{error}</div>
    }
    return (
        <div className='flex p-6 w-[90%] justify-center md:bg-white md:mt-8 md:rounded-md '>
            {filme && (
                <div className='flex justify-start items-center flex-col gap-6 md:flex-row lg:justify-center lg:container'>
                    <CartazFilme imagem_cartaz={filme.imagem} />
                    <div className='flex justify-start flex-col gap-2 md:mx-4 lg:gap-8'>
                        <h1 className='text-xl lg:text-2xl'><span className='text-lg font-semibold lg:text-xl'>Título:</span> {filme.nome}</h1>
                        <span className='text-xl lg:text-2xl'><span className='text-lg font-semibold lg:text-xl'>Duração:</span> {filme.duracao}</span>
                        <p className='text-md text-justify lg:text-2xl'><span className='text-lg font-semibold lg:text-xl'>Descrição:</span> {filme.descricao}</p>
                        <span className='text-xl lg:text-2xl'><span className='text-lg font-semibold lg:text-xl'>Lançamento:</span> {filme.ano}</span>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default PaginaFilme