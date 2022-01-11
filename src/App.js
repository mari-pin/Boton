
import './App.css';
import BotonEstiloso from './components/ui/botonEstiloso';
import DivFlex from './components/ui/divFlex';



function App() {
  return (
    <div className="App">
      {/* boton basico sin estilo para comparar co el creado */}
      <button>Enviar</button>
      <DivFlex direccion = "column">
        {/* utilizamos el boton que hemos creado en la linea 6 */}
        <BotonEstiloso colorTexto= "dark" >Enviar</BotonEstiloso>
        <BotonEstiloso colorTexto = "light" primary>Reset</BotonEstiloso>
      </DivFlex>
      <DivFlex direccion = "row">
        {/* utilizamos el boton que hemos creado en la linea 6 */}
        <BotonEstiloso colorTexto= "dark" >Enviar</BotonEstiloso>
        <BotonEstiloso colorTexto = "light" primary>Reset</BotonEstiloso>
      </DivFlex>
     
    </div>
  );
}

export default App;
