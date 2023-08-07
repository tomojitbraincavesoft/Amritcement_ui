import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({title}) {
  return (
    <div>
      <div className="mt-3 grid">
      <Link to="/">
      <button  className="btn btn-primary waves-effect waves-light w-100 btn-custom">{title}</button>
      </Link>
        
      </div>
    </div>
  )
}
