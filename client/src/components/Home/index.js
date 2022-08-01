import React from 'react';
import { Card } from '../Card';
import style from './Home.module.css';

export const Home = () => {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />    
        <Card />  
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
