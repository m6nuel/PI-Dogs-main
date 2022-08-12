import React from 'react';
import style from './Card.module.css';

export const Card = ({image, nombre, peso, temperamento}) => {
  return (
    <div className={`${style.conteiner}`}>
        <div className={`${style.card}`}>
          <div className={`${style.img}`}>
            <img src={image} alt='imagen'/>
          </div>
          <p>{nombre}</p>
          <p>Temperamentos: 
            {
              temperamento.map((t) => <div key={t+Math.random()}>{t}</div>)
            }
    
          </p>
          <p>Peso: {peso} Kg</p>
        </div>
    </div>
  )
}
