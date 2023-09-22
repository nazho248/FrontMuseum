import { LazyLoadImage } from "react-lazy-load-image-component";

export function Content(artefacto) {
  return (
    <div className="flex flex-col w-5/12 p-4 lg:p-20 mt-5 lg:mt-14 max-h-screen">
      <div className="flex flex-1 flex-col justify-center items-center h-1/2">
        <LazyLoadImage
          className="rounded-md drop-shadow-md h-4/6"
          src={"../assets/img/artefactos/" + artefacto.artefacto.img1}
          alt=""
        />
        <p className="text-justify text-sm lg:text-lg font-light mt-6 mb-10">
          {artefacto.artefacto.alt1}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center h-1/2">
        <LazyLoadImage
          className="rounded-md drop-shadow-md h-4/6"
          src={"../assets/img/artefactos/" + artefacto.artefacto.img2}
          alt=""
        />
        <p className="text-justify text-sm lg:text-lg font-light mt-6 mb-10">
          {artefacto.artefacto.alt2}
        </p>
      </div>
    </div>
  );
}
