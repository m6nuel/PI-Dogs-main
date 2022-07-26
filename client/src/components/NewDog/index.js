import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDog, getTemperaments } from '../../redux/actions';
import style from './newDog.module.css';

const validate = ( form ) => {
  let errors = {}
  if ( !form.Nombre ) {
    errors.nombre = 'El nombre es obligatorio'
  }
  if ( !form.A_min || !form.A_max ) {
    errors.altura = 'La altura es requerida'
  }
  if ( !form.P_min || !form.P_max ) {
    errors.peso = 'El peso es requerido'  
  }
  if (!form.A_vida) {
    errors.a_vida = 'Agregar los años de vida es necesario como en el ejemplo'
  }
  return errors;
}

export const NewDog = () => {
  const dispatch = useDispatch();
  const temperamentos = useSelector( state => state.temperaments );

  const [button, setButton] = useState(true);
  const [errors, setErrors] = useState({
    nombre: '',
    a_min: '',
    a_max: '',
    p_min: '',
    p_max: '',
    a_vida: '',
    image: '',
    temperaments: []
  })

  const [form, setForm] = useState({
    Nombre: '',
    A_min: '',
    A_max: '',
    P_min: '',
    P_max: '',
    A_vida: '',
    Image: '',
    Temperaments: []
  })

  useEffect(() => {
    dispatch( getTemperaments() );
  }, [dispatch])

  useEffect(() => {
    if (form.Nombre.length > 0 && form.A_min > 0 && form.A_max.length > 0 && form.P_min.length > 0 && form.P_max >0 )
      setButton( false )
    else setButton( true )
  }, [form, setButton])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( createDog(form) );
    alert('Se creo una nueva raza de perro')
    console.log(form)
    setForm({
      Nombre: '',
      A_min: '',
      A_max: '',
      P_min: '',
      P_max: '',
      A_vida: '',
      Image: '',
      Temperaments: []
    })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
    setErrors( validate({
      ...form,
      [e.target.name] : e.target.value
    }) )
  }

  const handleSelect = (e) => {
    setForm({
      ...form,
      Temperaments: [ ...form.Temperaments, e.target.value ]
    })
  }

  return (
    <div className={`${ style.newDog }`}>
      <form className={`${ style.form }`} id='form' onSubmit={ handleSubmit }>
        <h2> Crear nueva raza de Perro </h2>

        <div className={`${ style.nombre }`}>
          <input type='text' value={form.Nombre} name='Nombre' onChange={ (e) => handleChange(e) } placeholder='Nombre de la nueva Raza' />
        <div className={`${ style.error }`}>{ errors.nombre && <p> { errors.nombre } </p> }</div>
        </div>

        
        <div className={`${ style.altura }`}>
          <label>
            Altura: 
          </label>
            <input type='text' value={ form.A_min } name='A_min' onChange={ handleChange } placeholder='Altura Minima' />
            <span> cm </span>
            <input type='text' value={ form.A_max } name='A_max' onChange={ handleChange } placeholder='Altura Maxima' />
            <span> cm </span>
        <div className={`${ style.error }`}> { errors.altura && <p> { errors.altura } </p> } </div>
        </div>
      
        <div className={`${ style.peso }`}>
          <label>
            Peso
          </label>
            <input type='text' value={ form.P_min } name='P_min' onChange={ handleChange } placeholder='Peso Minimo'/>

            <input type='text' value={ form.P_max } name='P_max' onChange={ handleChange } placeholder='Peso Maximo'/>

        <div className={`${ style.error }`}> { errors.peso && <p> { errors.peso } </p> } </div>
        </div>

        <div>
          <label>
            Tiempo de Vida:
          </label>

            <input type='text' value={ form.A_vida } name='A_vida' onChange={ handleChange } placeholder='ejm: 10 - 12 years'/>

        <div className={`${ style.error }`}> { errors.a_vida && <p> { errors.a_vida } </p> } </div>
        </div>

        <div>
          <input type='text' value={ form.Image } name='Image' onChange={ handleChange } placeholder='URL de la imagen' />
        </div>

        <div>
          Seleccionar Temperamentos
          <div>
            <select className={`${ style.select }`} defaultValue='temp' onChange={ handleSelect }>
              <option disabled value='temp' >
                Temperamentos
              </option>
              {
                temperamentos.map( t => (
                  <option value={t.Nombre} key={t.id} >{ t.Nombre }</option>
                ))
              }

            </select>
          </div>
        </div>

        <div>
          {
            form.Temperaments?.map( t => (
              <div key={t}>
                <p> { `${t}` } </p>
              </div>
            ))
          }
        </div>

        <button type='submit' disabled={ button } form='form'>
          Crear Raza
        </button>
      </form>
    </div>
  )
}
