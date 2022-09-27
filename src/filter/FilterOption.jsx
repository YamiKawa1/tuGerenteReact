import React from 'react'

export default function FilterOption(props) {
  return (
    <div className="form-check filterOption rounded">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={props.filterValue} onClick={props.filterChange}/>
            <label className="form-check-label" for="flexRadioDefault1">
                {props.filterType}
            </label>
    </div>
  )
}
