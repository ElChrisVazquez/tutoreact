import React from 'react'
import PropTypes from 'prop-types';

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'true' : 'false'}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre + ' ' + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    );
}

// Carga por defecto las propiedades
Propiedades.defaultProps = {
    porDefecto: "Las props"
}


// Forza el tipo de dato que espera recibir 
Propiedades.propTypes  = {
    numero: PropTypes.number
}

