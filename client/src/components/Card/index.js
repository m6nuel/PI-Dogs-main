import React from 'react';
import style from './Card.module.css';

export const Card = ({image, nombre, peso}) => {
  return (
    <div className={`${style.conteiner}`}>
        <div className={`${style.card}`}>
          <div className={`${style.img}`}>
            <img src={image} alt='imagen'/>
          </div>
          <p>{nombre}</p>
          <p>Temperamento</p>
          <p>{peso} Kg</p>
        </div>
    </div>
  )
}
