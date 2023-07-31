export function Content() {
    return (
        <div className="flex flex-col w-5/12 p-10 max-h-screen">

            <div className="flex flex-1 flex-col justify-center items-center h-1/2">
                <img
                    className="rounded-md drop-shadow-md h-5/6"
                    src="assets/img/0V3A0666.jpg"
                    alt=""
                />
                <p className="text-justify text-lg font-light mt-6 mb-10"> ALT 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec </p>
            </div>

            <div className="flex flex-1 flex-col justify-center items-center h-1/2">
                <img
                    className="rounded-md drop-shadow-md h-5/6"
                    src="assets/img/0V3A0666.jpg"
                    alt=""
                />
                <p className="text-justify text-lg font-light mt-6"> ALT 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec </p>
            </div>

        </div>



    )
}