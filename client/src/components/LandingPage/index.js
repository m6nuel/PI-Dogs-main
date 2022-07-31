import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'

export const LandingPage = () => {
  return (
    <div className={`${style.container}`}>
      <Link to="/home">
        <button className={`${style.boton}`}> Guau a Home</button>
      </Link>
    </div>
  )
}
