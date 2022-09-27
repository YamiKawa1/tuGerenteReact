import React from 'react'
import './Dropdown.css'
import Item from './Item';


export default function Dropdown(props) {
    if (!props.users) {
        return <h1>loading...</h1>
    } else {
        return (
            <div className='dropdown mt-3 ms-2'>
                <div className="">
                    <button type="button" class="btn btn-danger dropdown-toggle" onClick={props.searchUsers} data-bs-toggle="dropdown" aria-expanded="false">
                        Find
                    </button>
                    <ul className="dropdown-menu">
                    <li className='d-flex'>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Create New User
                        </button>

                    </li>
                    <li className='d-flex'>
                        <span className="dropdown-item" >Nombre</span>
                        <span className="dropdown-item" >Codigo</span>
                        <span className="dropdown-item" >NIT</span>
                        <span className="dropdown-item" >Telefono</span>
                        <span className="dropdown-item" >Razon Social</span>
                    </li>
                        {
                            props.users.map(user => {
                                return <Item key={user.id} data={user}/>
                            })
                        }
                    </ul>
                </div>
            </div>
          )
    }
 
}
