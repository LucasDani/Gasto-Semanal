import React, { useState } from 'react'
import { Error } from './Error';
import PropTypes from 'prop-types'


export const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //Función que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10))
  }

  //Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) ) {
      guardarError(true)
      return
    }
    //Pasa la validación
    guardarError(false)
    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    actualizarPregunta(false)

  }


  return (
    <>
        <h2>Ingresa tu Presupuesto</h2>

        { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

        <form
          onSubmit={agregarPresupuesto}
        >
            <input
                type="number"
                className='u-full-width'
                placeholder='Ingresa tu presupuesto'
                onChange={ definirPresupuesto }
            />
            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Definir Presupuesto'
            />
        </form>
    </>
  )
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}