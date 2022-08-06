import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import style from './Home.module.css';
import { useDispatch, useSelector } from "react-redux";
import { SearchDogs } from '../SearchDogs';
import { 
  filterTemps,
  filterWeight,
  getAllDogs, 
  getTemperaments, 
  orderAlpha } from '../../redux/actions';
import { Paginate } from '../Paginate';

export const Home = () => {
  const dispatch = useDispatch();
  const auxDogs = useSelector( state => state.dogs );
  // const dogs = useSelector( state => state.dogs );
  const temps = useSelector( state => state.temperaments );
  const [pag, setPag] = useState(1);
  const dogsPag = 8;
  const lastIndex = pag * dogsPag;
  const firstIndex = lastIndex - dogsPag;
  const pageDogs = auxDogs.slice( firstIndex, lastIndex );
  
  const pags = (num) => {
    setPag(num)
  }

    // eslint-disable-next-line
    const [orden, setOrden] = useState("");
  
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch])


  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(orderAlpha(e.target.value))
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterTemps = (e) => {
    e.preventDefault();
    dispatch( filterTemps(e.target.value) );
  }

  const handleWeight = (e) => {
    e.preventDefault();
    dispatch( filterWeight(e.target.value) );
    setOrden(`Ordenado ${e.target.value}`)
  }

  
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



  return (
    <div className={`${ style.contenedor }`}>
      <div className={`${style.navbar}`}>
        <SearchDogs />      
      </div>

      <div className={`${ style.sidebar }`}>
        <select onChange={ handleSelect }>
            <option disabled defaultValue>
                Orden Alfabetico
            </option>
            <option value='az'>
                Ascendente A a la Z
            </option>
            <option value='za'>
                Descendente Z a la A
            </option>
        </select>
        <select onChange={ handleFilterTemps }>
          <option disabled defaultValue>
            Temperamentos
          </option>
          <option value='all'>Todos</option>
          {
            temps?.map( t => (
              <option value={ t.Nombre } key={ t.id }>{ t.Nombre }</option>
            ))
          }
        </select>
        <select defaultValue='ft' onChange={ handleWeight }>
          <option disabled value='ft' >
            Filtrado por Peso
          </option>
          <option value='max'>
            De Mayor a Menor Peso
          </option>
          <option value='min'>
            De Menor a Mayor Peso
          </option>
        </select>
      </div>

      <div className={`${ style.main }`}>
        <h3 className={`${ style.titulo }`}>Listado de razas de Perro</h3>
          {
            pageDogs?.map( (dog) => {
              return(
                <Card 
                  key={dog.id} 
                  image={dog.Imagen ? dog.Imagen : 'Imagen no encontrada'} 
                  nombre={dog.Nombre} 
                  peso={dog.Peso[0]} 
                  temperamento={ dog.Temperamento[0] ? dog.Temperamento.map( t => t.Nombre) : dog.Temperamento }/>
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
