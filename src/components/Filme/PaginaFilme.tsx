import useFetchFilme from '../../hooks/useFetchFilme'
import CartazFilme from '../CartazFilme/CartazFilme'

function PaginaFilme() {
    const {data:filme, error, loading} = useFetchFilme(1)

    if(loading){
        return <div>Carregando...</div>
    }

    if(error){
        return <div>{error}</div>
    }
    console.log(filme)
    return (
        <div className='flex p-6 w-full justify-center md:bg-white'>
            {filme && (
                <div className='flex justify-start items-center flex-col gap-6 md:flex-row lg:justify-center lg:container'>
                    <CartazFilme imagem_cartaz={filme.imagem} />
                    <div className='flex justify-start flex-col gap-2 md:mx-4'>
                        <h1 className='text-xl'><span className='text-lg font-semibold'>Título:</span> {filme.nome}</h1>
                        <span className='text-xl'><span className='text-lg font-semibold'>Duração:</span> {filme.duracao}</span>
                        <p className='text-lg text-justify'><span className='text-lg font-semibold'>Descrição:</span> {filme.descricao}</p>
                        <span className='text-xl'><span className='text-lg font-semibold'>Lançamento:</span> {filme.ano}</span>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default PaginaFilme