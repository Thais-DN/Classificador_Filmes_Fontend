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
            className="relative min-w-full lg:min-w-[500px] max-w-[500px] min-h-[200px] flex justify-start items-center p-2 rounded-xl bg-blue-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-600
        "
        >
            <div className="lg:hidden flex flex-col justify-start items-start gap-4 px-5 z-10">
                <span className="font-semibold text-lg">{grupo.nome} </span>

                <span className="text-lg">{categorias?.nome} </span>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-start gap-4 px-5 z-10">
                <span className="text-lg">
                    Nome animação:{" "}
                    <span className="font-semibold ml-1">{grupo.nome}</span>{" "}
                </span>

                <span>Categoria: {categorias?.nome} </span>
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
