import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import style from './Home.module.css';
import { useDispatch, useSelector } from "react-redux";
import { SearchDogs } from '../SearchDogs';
import { getAllDogs, getTemperaments, orderAlpha } from '../../redux/actions';
import { Paginate } from '../Paginate';

export const Home = () => {
  const dispatch = useDispatch();
  const auxDogs = useSelector( state => state.dogs );
  // const dogs = useSelector( state => state.dogs );
  // const temps = useSelector( state => state.temperaments );
  const [pag, setPag] = useState(1);
  const dogsPag = 8;
  const lastIndex = pag * dogsPag;
  const firstIndex = lastIndex - dogsPag;
  const pageDogs = auxDogs.slice( firstIndex, lastIndex );
  
  const pags = (num) => {
    setPag(num)
  }
  
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch])



  
  const nextPag = () => {
    if (auxDogs.length > pag + 8) {
      setPag( pag + 8 );
    }
  }

  const antPag = () => {
    if (pag < 8) {
      return
    }
    setPag( pag - 8 );
  }

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(orderAlpha(e.target.value))
  }


  return (
    <div className={`${ style.contenedor }`}>
      <div className={`${style.navbar}`}>
        <SearchDogs />      
      </div>

      <div className={`${ style.sidebar }`}>
      <select onChange={ handleSelect }>
            <option defaultValue>
                Orden Alfabetico
            </option>
            <option value='az'>
                Ascendente A a la Z
            </option>
            <option value='za'>
                Descendente Z a la A
            </option>
        </select>
      </div>

      <div className={`${ style.main }`}>
        <h3 className={`${ style.titulo }`}>Listado de razas de Perro</h3>
          {
            pageDogs?.map( (dog) => {
              return(
                <Card key={dog.id} image={dog.Imagen} nombre={dog.Nombre} peso={dog.Peso[0]}/>
              )
            })            
          }
        <div className={`${ style.paginacion }`}>
          <button
            onClick={ antPag }
          >
            anterior
          </button>
          <Paginate dogsPag={ dogsPag } dogs={ auxDogs.length } pags={ pags } />
          <button
            onClick={ nextPag }
          >
            Siguiente
          </button>
        </div>  
      </div>
      <div className={`${style.footer}`}>
        footer
      </div>
    </div>
  )
}
