import { AiFillHome } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'

export function NavPanel(props) {
  const { id } = useParams()
  let url_path = ''
  if (id !== undefined) {
    url_path = '../'
  }

  return (
    <div
      id="customScroll"
      className="overflox-y-scroll absolute right-0 top-0 flex max-h-screen w-1/12 flex-col gap-1 overflow-x-hidden bg-orange-300 px-1 "
      style={{ backgroundColor: '#F19F91' }}
    >
      {/*menu*/}
      <Link to="/Artefacto">
        <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md bg-red-200 transition duration-500 ease-in-out hover:bg-red-500 hover:text-slate-200 lg:h-28">
          <AiFillHome className="text-red-600 lg:scale-150" size="30" />
        </div>
      </Link>
      {/*elementos*/}
      {/*para cada artefacto imprimirlo*/}
      {props.artefactos.map((artefacto, index) =>
        id !== artefacto.id ? (
          <Link
            to={'/artefacto/' + artefacto.nombre}
            key={artefacto.nombre}
            onClick={() => artefacto.id === artefacto.nombre && props.setChange(true)}
          >
            <img
              className={
                'h-fit w-fit rounded-md drop-shadow-xl ' +
                (artefacto.nombre === props.idActual && 'border-4 border-red-600')
              }
              src={url_path + 'assets/img/artefactos/Thumbs/' + artefacto.nombre + '_tn.jpg'}
              alt=""
              style={{
                aspectRatio: '1/1',
                objectFit: 'cover',
                objectPosition: 'left',
              }}
            />
          </Link>
        ) : null
      )}
    </div>
  )
}
