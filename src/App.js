import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </section>
        <section>
          <Componente msg="Hola soy una prop" />
          <hr />
          <Propiedades
            cadena="String"
            numero={123}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: "Chris",
              correo: "ola@gmail.com",
            }}
            elementoReact={<i>Esto es un elementoReact</i>}
            funcion={(num) => num * num}
            componente={<Componente msg="Componente prop" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <Eventos />
        </section>
      </header>
    </div >
  );
}

export default App;
