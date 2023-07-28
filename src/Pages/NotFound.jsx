import { Link } from 'react-router-dom';
import {BackBtn} from "../BackBtn";

export function NotFound() {
    document.body.id = "notfound";
    document.title = "Página No Encontrada";

    return (
        <div className={"errorContent"}>
            <BackBtn/>
            <h1>404</h1>
            <p className={"text-2xl"}>Pagina no encontrada.</p>
            <Link to="/">
                {/*boton tailwind*/}
                <button className="bg-orange-400 hover:bg-orange-700 text-white mt-5 font-bold py-3 px-3 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Volver al inicio
                </button>
            </Link>

        </div>
    )
}