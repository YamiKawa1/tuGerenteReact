import React from 'react'
import './Filter.css'
import FilterOption from './FilterOption'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Filter(props) {
  return (
    <div className='searchBar'>
        <div className="input-group input-group-sm mb-3 mt-3">
            <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" onKeyUp={props.searchChange}/>
            <span className="input-group-text fs-6" id="basic-addon2"><i className='fs-6'><SearchRoundedIcon/></i></span>
        </div>
        <FilterOption filterType ="All" filterValue = "all" filterChange={props.filterChange}/>
        <FilterOption filterType ="Nombre" filterValue = "nombre" filterChange={props.filterChange}/>
        <FilterOption filterType ="Razon Social" filterValue = "razon_social" filterChange={props.filterChange}/>
        <FilterOption filterType ="NIT" filterValue = "nit" filterChange={props.filterChange}/>
        <FilterOption filterType ="Telefono" filterValue = "telefono" filterChange={props.filterChange}/>
        <FilterOption filterType ="Codigo" filterValue = "codigo" filterChange={props.filterChange}/>
    </div>
  )
}
