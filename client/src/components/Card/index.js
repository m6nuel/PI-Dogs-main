import React from 'react';
import style from './Card.module.css';

export const Card = () => {
  return (
    <div className={`${style.conteiner}`}>
        <div className={`${style.card}`}>
          <div className={`${style.img}`}>
            <img src="https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg" alt='imagen'/>
          </div>
          <p>Perrito</p>
          <p>Temperamento</p>
          <p>Peso</p>
        </div>
    </div>
  )
}
