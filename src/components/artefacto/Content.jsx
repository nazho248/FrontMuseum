import { LazyLoadImage } from 'react-lazy-load-image-component'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useState } from 'react'

export function Content(artefacto) {
  const [image1loaded, setImage1Loaded] = useState(false)

  let src1 = '../assets/img/artefactos/' + artefacto.artefacto.img1
  let src2 = '../assets/img/artefactos/' + artefacto.artefacto.img2

  let thumb1 = '../assets/img/artefactos/Thumbs_content/' + artefacto.artefacto.img1
  let thumb2 = '../assets/img/artefactos/Thumbs_content/' + artefacto.artefacto.img2

  return (
    <div className="flex max-h-screen w-4/12 flex-col  bg-white ">
      <Image src={src1} thumb={thumb1} alt={artefacto.artefacto.alt1} />

      <Image src={src2} thumb={thumb2} alt={artefacto.artefacto.alt2} />
    </div>
  )
}

export function Image({ src, thumb, alt }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="m-auto flex w-4/12 flex-col rounded-md lg:w-3/6">
      {!loaded && <LazyLoadImage src={src} placeholderSrc={thumb} effect={'blur'} onLoad={() => setLoaded(true)} />}

      {loaded && (
        <Zoom>
          <img src={src} alt={alt} />
        </Zoom>
      )}
      <p className="w-44 self-center text-center text-sm lg:w-fit lg:text-lg">{alt}</p>
    </div>
  )
}
