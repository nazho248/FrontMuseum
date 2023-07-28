export function Content() {
    return (
        <div className="flex flex-col w-8/12 p-10">
            <p className="mt-10 text-xl text-justify">
                Copa con borde invertido y labio recto, sobre el hombro salen dos
                agarraderas, cuerpo elipsoide. Tiene decoración pintada externa e interna, y
                su acabado es pulido. La vasija presenta una irregularidad en el soporte que
                le genera un desnivel marcado a la pieza.
            </p>
            <div className="flex flex-row gap-5 mt-10 justify-center">
                <img
                    className="w-1/3 h-fit rounded-md drop-shadow-xl"
                    src="assets/img/0V3A0666.jpg"
                    alt=""
                />
                <img
                    className="w-1/3 h-fit rounded-md drop-shadow-xl"
                    src="assets/img/0V3A0678.jpg"
                    alt=""
                />
                <img
                    className="w-1/3 h-fit rounded-md drop-shadow-xl"
                    src="assets/img/0V3A0671.jpg"
                    alt=""
                />
            </div>
            <div className="flex flex-row gap-5 mt-10 h-full justify-center items-center">
                {/*object fit from the left*/}
                <img
                    className="w-4/6 h-full rounded-md"
                    src="assets/img/0V3A0678.jpg"
                    alt=""
                    style={{ objectFit: "cover", objectPosition: "left center" }}
                />
                <p className="text-xl text-justify w-2/6">
                    La decoración pintada externa e interna, y su acabado es pulido. La vasija
                    presenta una irregularidad en el soporte que le genera un desnivel marcado
                    a la pieza.
                </p>
            </div>
        </div>

    )
}