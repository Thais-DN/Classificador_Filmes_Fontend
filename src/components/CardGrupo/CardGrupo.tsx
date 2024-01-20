import useFetchCategoriasByUrl from "../../hooks/useFatchCategoriasByUrl";
import { GrupoObject } from "../../types";

interface Props {
    grupo: GrupoObject;
}

function CardGrupo({ grupo }: Props) {
    const {
        data: categorias,
        error,
        loading,
    } = useFetchCategoriasByUrl(grupo.categoria[0]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        // Posicionamento relativo no container para a posição absoluta da imagem funcionar corretamente

        <a
            href="#"
            className="relative col-span-1 min-h-[200px] flex justify-start items-center p-2 rounded-xl bg-blue-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-600"
        >
            <div className="lg:hidden flex flex-col justify-start items-start gap-4 px-5 z-10">
                <span className="font-bold text-lg">{grupo.nome} </span>
                <span className="text-lg">{categorias?.nome} </span>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-start gap-4 px-5 z-10">
                <span className="text-lg">
                    <span className="font-bold ml-1">{grupo.nome}</span>
                </span>
                <span>{categorias?.nome} </span>
            </div>

            <img
                className="absolute -top-8 -bottom-8 right-0  max-h-[250px] z-0"
                src={grupo.imagem}
                alt={grupo.nome}
            />
        </a>
    );
}

export default CardGrupo;
