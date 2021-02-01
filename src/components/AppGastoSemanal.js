import React, { useState, useEffect } from 'react';

import Presupuesto from './Presupuesto';
import {Formulario} from './Formulario';
import {ListadoDeGastos} from './ListadoDeGastos';
import {ControlPresupuesto} from './ControlPresupuesto';


function AppGastoSemanal() {

	// Definimos los states
	const [presupuesto, guardarPresupuesto] = useState(0);
	const [restante, guardarRestante] = useState(0);
    const [mostrarPregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);
    const [gasto, guardarGasto] = useState({});
    const [crearGasto, guardarCrearGasto] = useState(false);


    // Detectamos cada vez que cambie el gasto
    // Usefect que actualiza el restante
    useEffect(() => {
        if (crearGasto) {

            // agrega el nuevo presupuesto
            guardarGastos([
                ...gastos,
                gasto
            ]);

            // resta del presupuesto actual
            const presupuestoRestante = restante - gasto.cantidad;
            guardarRestante(presupuestoRestante);

            // Resetear
            guardarCrearGasto(false);

        }
    }, [gasto, crearGasto, gastos, restante])



	return (

		<div className="container">
			<header>
				<h1>Gasto semanal</h1>
				<div className="contenido-principal contenido">
                    {/* Mostramos el formulario de forma condicional */} 
                    { mostrarPregunta ? 
                        (
                            <Presupuesto 
                                guardarPresupuesto={guardarPresupuesto}
                                guardarRestante={guardarRestante}
                                actualizarPregunta={actualizarPregunta}
                            />
                        ) : (
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario
                                        guardarGasto={guardarGasto}
                                        guardarCrearGasto={guardarCrearGasto}
                                    />
                                </div>
                                <div className="one-half column">
                                    <ListadoDeGastos
                                        gastos={gastos}
                                    />
                                    <ControlPresupuesto
                                        presupuesto={presupuesto}
                                        restante={restante}
                                    />
                                </div>
                            </div>
                        ) 
                    }
				</div>
			</header>
		</div>


	);
}

export default AppGastoSemanal;
