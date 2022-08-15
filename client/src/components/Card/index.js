import React from 'react';
import style from './Card.module.css';

export const Card = ({image, nombre, peso, temperamento}) => {
  return (
        <div className={`${style.card}`}>
          <div className={`${style.img_c}`}>
            <img src={image} alt='imagen'/>
          </div>

          <div className={`${ style.info }`}>
            <h4>{nombre}</h4>
            
            <h4>Peso: {peso} Kg</h4>
            <div><h4>Temperamentos: </h4> 
              {
                temperamento.map((t,i) => <h4 key={i}>{t}</h4>)
              }

            </div>
          </div>
        </div>

  )
}
