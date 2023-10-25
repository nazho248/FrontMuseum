import { Fragment, useState } from 'react'
import { BackBtn } from '../BackBtn'
import { MainImage } from '../components/galeria/MainImage'
import { RightNav } from '../components/galeria/RightNav'

export function Galeria() {
  const data_galery = Object.values(require('../data/galery.json'))
  const [currentImage, setCurrentImage] = useState(0)

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
