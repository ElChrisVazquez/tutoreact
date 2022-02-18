import React, { Component } from 'react';
import data from "../helpers/data.json";

function ElementoLista(props) {
    return (
        <li>
            <a href="#">{props.elemento.name} </a>
        </li>
    )
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            season: ['Primavera', 'Verano', 'Otoño', 'Inviero']
        }
    }

    render() {
        return (
            <div>
                <h2>RenderizadoElementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.season.map((e, i) => (
                        <li key={i}>{e}</li>
                    ))
                    }
                </ol>
                <h3>Frameworks front end</h3>
                <ul>
                    {
                        data.fameworks.map((e) => (<ElementoLista key={e.id} elemento={e} />))
                    }
                </ul>
            </div>
        )
    }
}
