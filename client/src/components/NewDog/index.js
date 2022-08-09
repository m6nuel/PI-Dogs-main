import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments } from '../../redux/actions';

const validate = ( form ) => {
  let errors = {}
  if ( !form.nombre ) {
    errors.nombre = 'El nombre es obligatorio'
  }
  if ( !form.a_min || !form.a_max ) {
    errors.altura = 'La altura es requerida'
  }
  if ( !form.p_min || !form.p_max ) {
    errors.peso = 'El peso es requerido'  
  }
  if (!form.a_vida) {
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
    nombre: '',
    a_min: '',
    a_max: '',
    p_min: '',
    p_max: '',
    a_vida: '',
    image: '',
    temperaments: []
  })

  useEffect(() => {
    dispatch( getTemperaments() );
  }, [dispatch])

  useEffect(() => {
    if (form.nombre.length > 0 && form.a_min > 0 && form.a_max.length > 0 && form.p_min.length > 0 && form.p_max >0 )
      setButton( false )
    else setButton( true )
  }, [form, setButton])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      nombre: '',
      a_min: '',
      a_max: '',
      p_min: '',
      p_max: '',
      a_vida: '',
      image: '',
      temperaments: []
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
      temperaments: [ ...form.temperaments, e.target.value ]
    })
  }

  return (
    <div>
      <form id='form' onSubmit={ handleSubmit }>

        <div>
          Nombre
          <div>
            <input type='text' value={form.nombre} name='nombre' onChange={ (e) => handleChange(e) } placeholder='Nombre de la nueva Raza' />
          </div>
        </div>
        <div>{ errors.nombre && <p> { errors.nombre } </p> }</div>
        
        <div>
          altura
          <div>
            <input type='text' value={ form.a_min } name='a_min' onChange={ handleChange } placeholder='Altura Minima' />
          </div>
          <div>
            <input type='text' value={ form.a_max } name='a_max' onChange={ handleChange } placeholder='Altura Maxima' />
          </div>
        </div>
        <div> { errors.altura && <p> { errors.altura } </p> } </div>
      
        <div>
          Peso
          <div>
            <input type='text' value={ form.p_min } name='p_min' onChange={ handleChange } placeholder='Peso Minimo'/>
          </div>
          <div>
            <input type='text' value={ form.p_max } name='p_max' onChange={ handleChange } placeholder='Peso Maximo'/>
          </div>
        </div>
        <div> { errors.peso && <p> { errors.peso } </p> } </div>

        <div>
          Tiempo de Vida
          <div>
            <input type='text' value={ form.a_vida } name='a_vida' onChange={ handleChange } placeholder='ejm: 10 - 12 years'/>
          </div>
        </div>
        <div> { errors.a_vida && <p> { errors.a_vida } </p> } </div>

        <div>
          <input type='text' value={ form.image } name='image' onChange={ handleChange } placeholder='URL de la imagen' />
        </div>

        <div>
          Seleccionar Temperamentos
          <div>
            <select defaultValue='temp' onChange={ handleSelect }>
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
            form.temperaments?.map( t => (
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
