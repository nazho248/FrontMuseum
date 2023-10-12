import React from 'react'
import { Link } from 'react-router-dom'
export function BackBtn() {
  return (
    <Link className="none-link bg-real-800 scale-75 transform lg:scale-100" to="/">
      <button className="back-button" type="button">
        <span className="arrow" />
      </button>
    </Link>
  )
}
