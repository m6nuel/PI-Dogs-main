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
    
      <div className={`${ style.img1 }`}>
      </div>

      <div className={`${ style.img2 }`}>
      </div>
  
      <div className={`${style.boton}`}>
        <Link to="/home">
          <button> Guau a Home</button>
        </Link>
      </div>
      
      <div className={`${ style.img3 }`}>
      </div>
      
      <div className={`${ style.img4 }`}>
      </div>

    </div>
  )
}
