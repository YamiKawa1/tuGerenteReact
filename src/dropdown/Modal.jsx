import React from 'react'

export default function Modal(props) {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Create New User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="mb-2">
                    <input type="text" className="form-control" id="nombre" placeholder='Nombre'/>
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" id="codigo" placeholder='Codigo'/>
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" id="nit" placeholder='NIT'/>
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" id="telefono" placeholder='Telefono'/>
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" id="razon_social" placeholder='Razon Social'/>
                </div>
            </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={props.writeNewUser}>Create</button>
        </div>
        </div>
    </div>
</div>
  )
}
