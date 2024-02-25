import useFetchCategorias from "../hooks/useFatchCategorias";
import Categoria from "../components/Categoria/Categoria";

function Home() {
    const { data: categorias, error, loading } = useFetchCategorias();

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className=" flex justify-center items-center min-w-screen min-h-screen bg-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:container gap-x-6 gap-y-9">
                {categorias?.map((categoria_obj, index) => {
                    return (
                        <Categoria key={index} categoriaObj={categoria_obj} />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
