import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchDogs } from '../../redux/actions';
import style from './search.module.css'

export const SearchDogs = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchDogs(search));
    }

    return (
        <div className={`${ style.search }`}>
            <input type='text' onChange={ handleChange } placeholder='Busqueda de perros por Razas'/>
            <button type='submit' onClick={ handleSubmit }>
                Buscar
            </button>
        </div>
    )
}
