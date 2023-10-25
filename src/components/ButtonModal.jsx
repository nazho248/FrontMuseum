// ButtonModal.js
import { UseModalMenu } from '../hooks/UseModalMenu'

export function ButtonModal() {
  UseModalMenu()

  return (
    <div className="menu -mr-3 -mt-10 scale-50 transform lg:mt-0 lg:scale-100">
      <div id="nav-icon">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
