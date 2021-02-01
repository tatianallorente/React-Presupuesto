import React from 'react'
import PropTypes from 'prop-types';

export const MostrarError = ({mensaje}) => {
    return (
        <p className="alert alert-danger error"> {mensaje} </p>
    )
}


MostrarError.propTypes = {
    mensaje: PropTypes.string.isRequired
}