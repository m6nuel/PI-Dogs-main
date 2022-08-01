import React from 'react';
import { Card } from '../Card';
import style from './Home.module.css';
import { useSelector } from "react-redux";

export const Home = () => {

  const allDogs = useSelector( state => state.dogs )
  console.log(allDogs)

  return (
    <div className={`${ style.contenedor }`}>
      <div className={`${style.navbar}`}>
        NavBar
      </div>

      <div className={`${ style.sidebar }`}>
        sidebar
      </div>

      <div className={`${ style.main }`}>
        <h3 className={`${ style.titulo }`}>Listado de razas de Perro</h3>
          {
            allDogs?.map( (dog) => {
              return(
                <Card key={dog.id} image={dog.Imagen} nombre={dog.Nombre} peso={dog.Peso[0]}/>
              )
            })
          }
        <div className={`${ style.paginacion }`}>
          paginacion
        </div>  
      </div>
      <div className={`${style.footer}`}>
        footer
      </div>
    </div>
  )
}
