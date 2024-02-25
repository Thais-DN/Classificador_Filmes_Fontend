import FilmesComponents from "../components/Filmes/FilmesComponents";
import mickey from "/images/mickey.png";

const fundoMickey = {
    backgroundImage: `url(${mickey})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
};

function Filmes() {
    return (
        <div style={fundoMickey}>
            <FilmesComponents />
        </div>
    );
}

export default Filmes;
