export function Content(artefacto) {
    console.log(artefacto)
    return (
        <div className="flex flex-col w-5/12 p-20 mt-14 max-h-screen">

            <div className="flex flex-1 flex-col justify-center items-center h-1/2">
                <img
                    className="rounded-md drop-shadow-md h-5/6"
                    src="../assets/img/0V3A0666.jpg"
                    alt=""
                />
                <p className="text-justify text-lg font-light mt-6 mb-10">{artefacto.artefacto.alt1}</p>
            </div>

            <div className="flex flex-1 flex-col justify-center items-center h-1/2">
                <img
                    className="rounded-md drop-shadow-md h-5/6"
                    src="../assets/img/0V3A0666.jpg"
                    alt=""
                />
                <p className="text-justify text-lg font-light mt-6">{artefacto.artefacto.alt2}</p>
            </div>

        </div>



    )
}