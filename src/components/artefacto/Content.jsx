import { LazyLoadImage } from 'react-lazy-load-image-component'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useState } from 'react'

export function Content(artefacto) {
  const [image1loaded, setImage1Loaded] = useState(false)
  const [image2loaded, setImage2Loaded] = useState(false)

  let src1 = '../assets/img/artefactos/' + artefacto.artefacto.img1
  let src2 = '../assets/img/artefactos/' + artefacto.artefacto.img2

  let thumb1 = '../assets/img/artefactos/Thumbs_content/' + artefacto.artefacto.img1
  let thumb2 = '../assets/img/artefactos/Thumbs_content/' + artefacto.artefacto.img2

  return (
    <div className="flex max-h-screen w-4/12 flex-col gap-4 bg-white py-3">
      {/*PRIMER ELEMENTO*/}
      <div className="h-max-1/2 flex h-1/2 flex-col items-center  justify-end gap-2">
        {!image1loaded && (
          /*cargamos el lazyload para que no se muestre esta area en blanco*/
          <LazyLoadImage
            className="m-auto w-3/6 rounded-md drop-shadow-md lg:w-4/6"
            src={src1}
            placeholderSrc={thumb1}
            effect={'blur'}
            onLoad={() => setImage1Loaded(true)}
          />
        )}
        {image1loaded && (
          /*cuando ya haya cargado nuestra imagen, colocamos el zoom para que se pueda hacer zoom a la imagen*/
          <Zoom>
            <img
              className="m-auto w-3/6 rounded-md drop-shadow-md lg:w-4/6"
              alt=""
              height="75%"
              width="75%"
              src={src1}
            />
          </Zoom>
        )}
        <p className="h-1/4 w-2/3 text-center text-xs text-gray-700">{artefacto.artefacto.alt1}</p>
      </div>

      {/*SEGUNDO ELEMENTO*/}
      <div className="h-max-1/2 flex h-1/2 flex-col items-center  justify-end gap-2">
        {!image1loaded && (
          /*cargamos el lazyload para que no se muestre esta area en blanco*/
          <LazyLoadImage
            className="m-auto w-3/6 rounded-md drop-shadow-md lg:w-4/6"
            src={src2}
            placeholderSrc={thumb2}
            effect={'blur'}
            onLoad={() => setImage1Loaded(true)}
          />
        )}
        {image1loaded && (
          /*cuando ya haya cargado nuestra imagen, colocamos el zoom para que se pueda hacer zoom a la imagen*/
          <Zoom>
            <img
              className="m-auto w-3/6 rounded-md drop-shadow-md lg:w-4/6"
              alt=""
              height="75%"
              width="75%"
              src={src2}
            />
          </Zoom>
        )}
        <p className=" mb-2 h-1/4 w-2/3 text-center text-xs text-gray-700 lg:mb-0">{artefacto.artefacto.alt2}</p>
      </div>
    </div>
  )
}

/*
  return (
    <div className="flex flex-col w-5/12 max-h-screen bg-white py-10 lg:py-0">
      <div className="flex flex-1 flex-col justify-end items-center h-1/2">
        {/!*condicional para imprimir el lazyload primero*!/}
        {!image1loaded && (
          /!*cargamos el lazyload para que no se muestre esta area en blanco*!/
          <LazyLoadImage
            className="rounded-md drop-shadow-md w-3/6 lg:w-4/6 m-auto"
            src={src1}
            placeholderSrc={thumb1}
            effect={"blur"}
            onLoad={() => setImage1Loaded(true)}
          />
        )}

        {image1loaded && (
          /!*cuando ya haya cargado nuestra imagen, colocamos el zoom para que se pueda hacer zoom a la imagen*!/
          <Zoom>
            <img
              className="rounded-md drop-shadow-md w-3/6 lg:w-4/6 m-auto"
              alt=""
              height="75%"
              width="75%"
              src={src1}
            />
          </Zoom>
        )}

        <p className="text-xs lg:text-lg font-light mt-6 mb-10">
          {artefacto.artefacto.alt1}
        </p>
      </div>
      {/!*imagen 2*!/}
      <div className="flex flex-1 flex-col justify-start items-center h-1/2 mt-4 lg:mt-4">
        <Zoom>
          <img
            className="rounded-md drop-shadow-md w-3/6 lg:w-3/6 m-auto mt-5"
            alt=""
            src={"../assets/img/artefactos/" + artefacto.artefacto.img2}
            width="75%"
            height="75%"
          />
        </Zoom>
        <p className="mx-4 text-sm lg:text-lg font-light mt-2 mb-10">
          {artefacto.artefacto.alt2}
        </p>
      </div>
    </div>
  );
}
*/
