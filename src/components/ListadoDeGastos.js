import React from 'react';
import PropTypes from 'prop-types';

import { Gasto } from './Gasto';


export const ListadoDeGastos = ({gastos}) => {
    return (
        <div className="gastos-realizados">
            <h2>Lista de gastos</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )
}

ListadoDeGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}