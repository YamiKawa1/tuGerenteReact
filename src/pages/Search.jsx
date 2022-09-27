import React, {useState, useEffect} from 'react';
import { collection, getDocs, query, orderBy, where, setDoc, doc} from "firebase/firestore"
import db from '../firebase/firebaseConfig';
import Modal from '../dropdown/Modal';
import Filter from '../filter/Filter'
import Dropdown from '../dropdown/Dropdown'
import { Domain } from '@mui/icons-material';

export default function Search() {
    const [keyword, setKeyword] = useState('')
    const [filterType, setFilterType] = useState('all')
    const [users, setUsers] = useState([])

    const searchChange = (e) => {
        setKeyword(e.target.value)
    }

    const filterChange = (e) => {
        setFilterType(e.target.value)
    }

    const getUsers = async() => {
        let searchQuery

        if (filterType === 'all' || keyword === '') {
          searchQuery = query(collection(db, "User"))
        }else if (filterType !== 'all' && keyword === ''){
          searchQuery = query(collection(db, "User"), orderBy(filterType))
        }
        else {
          searchQuery = query(collection(db, "User"), where(filterType, "==", keyword))
        }
        const search = await getDocs(searchQuery);
        setUsers(search.docs.map(doc => ({...doc.data(), id: doc.id})))
    }

    const writeNewUser = async() => {
      let nombre = document.getElementById('nombre').value
      let codigo = document.getElementById('codigo').value
      let nit = document.getElementById('nit').value
      let telefono = document.getElementById('telefono').value
      let razon_social = document.getElementById('razon_social').value

      console.log(nombre);
        await setDoc(doc(db, "User", "hola"), {
            nombre: nombre,
            codigo: codigo,
            nit: nit,
            telefono: telefono,
            razon_social: razon_social
          });
    }

  return (
    <div className='container d-flex flex-row card shadow-lg rounded main '>
      <Modal writeNewUser={writeNewUser}/>
      <Filter searchChange={searchChange} filterChange={filterChange}/>
      <Dropdown users={users} searchUsers={getUsers}/>
  </div>
  )
}
