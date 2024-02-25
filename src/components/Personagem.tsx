import { GrupoObject } from "../types";

export interface Props {
    grupo: GrupoObject;
}

function Personagem({ grupo }: Props) {
    return (
        <img
            className="absolute -top-8 -bottom-8 right-0  max-h-[250px] z-0"
            src={grupo.imagem}
            alt={grupo.nome}
        />
    );
}

export default Personagem;
