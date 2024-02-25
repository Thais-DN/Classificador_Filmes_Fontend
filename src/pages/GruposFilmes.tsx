import CardGrupo from "../components/CardGrupo/CardGrupo";
import useFetchGrupos from "../hooks/useFetchGrupos";
import mickey from "/images/mickey.png";
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
    };

    return (
        <div style={fundoMickey}>
            <Search />
            <div className="grid justify-center grid-cols-1 gap-16 px-2 py-10 md:p-10 md:grid-cols-2 xl:grid-cols-3">
                {grupos?.map((grupo, index) => {
                    return <CardGrupo grupo={grupo} key={index} />;
                })}
            </div>
        </div>
    );
}

export default GruposFilmes;
