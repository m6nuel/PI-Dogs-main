import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/actions';

export const LandingPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs())
  }, [dispatch])
  

  return (
    <div className={`${style.container}`}>
      <Link to="/home">
        <button className={`${style.boton}`}> Guau a Home</button>
      </Link>
    </div>
  )
}
