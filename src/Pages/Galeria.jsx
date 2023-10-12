import { Fragment, useEffect, useState } from 'react'
import { BackBtn } from '../BackBtn'
import { Main_Image } from '../components/galeria/Main_Image'
import { Right_Nav } from '../components/galeria/Right_Nav'

export function Galeria() {
  const data_galery = Object.values(require('../data/galery.json'))
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <Fragment>
      <BackBtn />
      <div className="gallery bg-slate-800">
        <Main_Image currentImage={data_galery[currentImage]} setCurrentImage={setCurrentImage} />
        <Right_Nav setCurrentImage={setCurrentImage} images={data_galery} />
      </div>
    </Fragment>
  )
}
