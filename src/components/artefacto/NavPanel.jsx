import { BiMenu } from "react-icons/bi";
import {Link, useParams} from "react-router-dom";

export function NavPanel(artefactos) {

    const { id } = useParams();
    let url_path =""
    if (id != undefined){
        url_path = "../"
    }


    return (
        <div
            id="customScroll"
            className="flex flex-col w-1/12 bg-orange-300 gap-1 overflow-x-hidden overflox-y-scroll absolute right-0 top-0 max-h-screen" style={{backgroundColor: "#F19F91"}}>
            {/*menu*/}
            <Link to="/artefacto">
            <div
                className="flex h-20 w-full bg-red-200 justify-center items-center hover:bg-red-500 cursor-pointer hover:text-slate-200 transition duration-500 ease-in-out">
                <BiMenu className="text-red-600 " size="42" />
            </div>
        </Link>
            {/*elementos*/}
            {/*para cada artefacto imprimirlo*/}
            {artefactos.artefactos.map((artefacto, index) => (
                id != artefacto.id ? (
                    <Link to={"/artefacto/" + artefacto.id} key={artefacto.id}>

                        <img
                            className={"w-fit h-fit rounded-md drop-shadow-xl"}
                            src={url_path + "assets/img/artefactos/Thumbs/" + artefacto.nombre + "_tn.jpg"}
                            alt=""
                            style={{
                                aspectRatio: "1/1", objectFit: "cover", objectPosition: "left"
                            }}
                        />
                    </Link>
                ) : null
            ))}
        </div>

    )
}