import React from 'react'

export default function Item(props) {
  return (
    <li className='d-flex'>
      <span className="dropdown-item" >{props.data.nombre}</span>
      <span className="dropdown-item" >{props.data.codigo}</span>
      <span className="dropdown-item" >{props.data.nit}</span>
      <span className="dropdown-item" >{props.data.telefono}</span>
      <span className="dropdown-item" >{props.data.razon_social}</span>
    </li>
  )
}
