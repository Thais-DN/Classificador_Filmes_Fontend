import CardGrupo from "../components/CardGrupo/CardGrupo";
import useFetchGrupos from "../hooks/useFetchGrupos";
import mickey from "../../public/images/mickey.png";
import Search from "../components/Search/Search";

function GruposFilmes() {
    const { data: grupos, error, loading } = useFetchGrupos();

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const fundoMickey = {
        backgroundImage: `url(${mickey})`,
        backgroundSize: "cover", // Ajuste conforme necessário
        backgroundPosition: "center", // Ajuste conforme necessário
        minHeight: "100vh", // Garante que o fundo cobre toda a altura da tela
        // Outras propriedades de estilo, se necessário
    };

    return (
        <div style={fundoMickey}>
            <Search />
            {/* <div className="flex items-center w-full justify-center p-5">
                <div className="flex border w-[30%] border-purple-200 rounded">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Busque sua animação..."
                    />
                    <button className="px-4 text-white bg-purple-600 border-l rounded ">
                        Buscar
                    </button>
                </div>
            </div> */}
            <div className="grid justify-center grid-cols-1 gap-16 px-2 py-10 md:p-10 md:grid-cols-2 xl:grid-cols-3">
                {grupos?.map((grupo, index) => {
                    return <CardGrupo grupo={grupo} key={index} />;
                })}
            </div>
        </div>
    );
}

export default GruposFilmes;
