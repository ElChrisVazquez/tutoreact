import React, { Component } from 'react'

export default class Eventos extends Component {
    constructor(props) {
        super(props);
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
        this.state = {
            contador: 0
        }
    }

    sumar(e) {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar(e) {
        this.setState({
            contador: this.state.contador - 1
        });
    }


    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}
