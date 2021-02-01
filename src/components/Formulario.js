import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { MostrarError } from './MostrarError';


export const Formulario = ({guardarGasto, guardarCrearGasto}) => {
  
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que guarda el nombre del gasto
    const definirNombre = e => {
        guardarNombre( e.target.value );
    }

    // Función que guarda la cantidad del gasto
    const definirCantidad = e => {
        guardarCantidad( parseInt(e.target.value, 10) || 0);
    }

    // Submit para definir el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if ( cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        // Si pasa la validación
        guardarError(false);
        
        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Resetear el formulairo
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Inserta tus gastos aquí</h2>

            { error ? <MostrarError mensaje="Falta el concepto o el valor es incorrecto."/> : null }

            <div className="campo">
                <label>Concepto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="EJ. Transporte"
                    value={nombre}
                    onChange={definirNombre}
                />
            </div>
             <div className="campo">
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="EJ. 300"
                    value={cantidad}
                    onChange={definirCantidad}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Añadir gasto"
            />

        </form>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}