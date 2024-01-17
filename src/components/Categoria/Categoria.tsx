import { Link } from "react-router-dom";
import { CategoriaObject } from "../../types";

interface Props {
    categoriaObj: CategoriaObject;
}

function Categoria({ categoriaObj }: Props) {
    return (
        <div className="col-span-1 select-none hover:cursor-pointer">
            <Link
                to={`/categoria/${categoriaObj.id}`}
                className="flex justify-center flex-col items-center"
            >
                <div className="w-32 lg:w-64">
                    <img
                        className="rounded-full shadow-lg"
                        src={categoriaObj.imagem}
                        alt={categoriaObj.nome}
                    />
                </div>
                <div className="text-lg font-semibold hover:text-blue-800 transition-colors">
                    {categoriaObj.nome}
                </div>
            </Link>
        </div>
    );
}

export default Categoria;
