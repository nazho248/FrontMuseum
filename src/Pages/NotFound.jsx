import { Link } from 'react-router-dom'
import { BackBtn } from '../BackBtn'

export function NotFound() {
  document.body.id = 'notfound'
  document.title = 'Página No Encontrada'

  return (
    <>
      <BackBtn />
      <div className={'errorContent'}>
        <h1>404</h1>
        <p className={'text-2xl'}>Pagina no encontrada.</p>
        <Link to="/">
          <button className="mt-5 transform rounded bg-orange-400 px-3 py-3 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-700">
            Volver al inicio
          </button>
        </Link>
      </div>
    </>
  )
}
