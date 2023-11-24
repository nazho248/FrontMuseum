import { Fragment, useEffect, useState } from 'react'
import { BackBtn } from '../BackBtn'
import { MainImage } from '../components/galeria/MainImage'
import { RightNav } from '../components/galeria/RightNav'

export function Galeria() {
  const data_galery_array = Object.values(require('../data/galery.json'))
  //desordenar el data_galery_array en un useState
  const [data_galery] = useState(data_galery_array.sort(() => Math.random() - 0.5))
  const [currentImage, setCurrentImage] = useState(0)

  //desordenar el array

  return (
    <Fragment>
      <BackBtn />
      <div className="gallery bg-slate-800">
        <MainImage currentImage={data_galery[currentImage]} setCurrentImage={setCurrentImage} />
        <RightNav setCurrentImage={setCurrentImage} images={data_galery} />
      </div>
    </Fragment>
  )
}
