import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MostrarError } from './MostrarError';


const Presupuesto = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Definir el State
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) );
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if ( cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        // Si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <>
            <h2>Indica tu presupuesto</h2>

            { error ? <MostrarError mensaje="El presupuesto es incorrecto"/> : null }

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Indica tu presupuesto"
                    onChange={definirPresupuesto}    
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    )
}

export default Presupuesto;


Presupuesto.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}