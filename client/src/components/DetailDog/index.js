import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { details } from '../../redux/actions';
import style from './detail.module.css'


export const DetailDog = () => {

  const dispatch = useDispatch();
  const id = useParams();
  
  useEffect(() => {
    dispatch(details(id));
  }, [dispatch, id])
  
  const dog = useSelector( state => state.dogDetail )


  let nombre,
      altura = [],
      peso = [],
      tiempoDeVida,
      image,
      temperamentos = [];

  if (dog[0]) {
    nombre = dog[0].Nombre;
    altura = dog[0].Altura;
    peso = dog[0].Peso;
    tiempoDeVida = dog[0].AñosDeVida;
    image = dog[0].Imagen;
    temperamentos = dog[0].Temperamento
  }

  return (
    <div className={`${ style.contain }`}>
      
      <div className={`${ style.tittle }`}>
        <h2> Detalle de la Raza </h2>
      </div>

      <div className={`${style.target}`}>      
        <div className={`${ style.image }`}>
          <img src={ image } alt={ nombre }/>
        </div>

        <div className={`${ style.info }`}>
          <h3> { `Nombre: ${ nombre }` } </h3>
          <h3> { `Altura: min ${ altura[0] ? altura[0] : 'N/A' } cm - max ${ altura[1] ? altura[1] : 'N/A' } cm` } </h3>
          <h3> { `Peso: min ${ peso[0] ? peso[0] : 'N/A' } Kg - max ${ peso[1] ? peso[1] : 'N/A' } Kg` } </h3>
          <h3> { `Tiempo de Vida ${ tiempoDeVida }` } </h3>
          <h3>Temperamentos:</h3>
          {
            temperamentos.map( t => <h3 key={t}> -{ t } </h3>)
          }
        </div>
      </div>


    </div>
  )
}
