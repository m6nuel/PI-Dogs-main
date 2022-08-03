import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import style from './Home.module.css';
import { useDispatch, useSelector } from "react-redux";
import { SearchDogs } from '../SearchDogs';
import { getAllDogs, getTemperaments, orderAlpha } from '../../redux/actions';
import { Paginate } from '../Paginate';

export const Home = () => {

  const dogs = useSelector( state => state.dogs );
  const [pag, setPag] = useState(0);
  const dogsPag = 8;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch])


  const pageDogs = (dogs.slice(pag, pag + 8));

  
  const nextPag = () => {
    if (dogs.length > pag + 8) {
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

  const pags = (num) => {
    setPag(num)
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
          &nbsp;
          <Paginate dogsPag={ dogsPag } dogs={ dogs.length } pags={ pags } />
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
