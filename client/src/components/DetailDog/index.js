import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { details } from '../../redux/actions';


export const DetailDog = () => {

  const dispatch = useDispatch();
  const id = useParams();
  
  useEffect(() => {
    dispatch(details(id));
  }, [dispatch, id])
  
  return (
    <div>DetailDog</div>
  )
}
