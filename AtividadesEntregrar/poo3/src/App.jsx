import { Cachorro, Gato, Passaro } from "./models/Animal"
import './App.css'

function App() {
 
  


let adicionaCachorro = document.getElementById('btn-cachorro');

const cachorros = []

adicionaCachorro.addEventListener('click', function () {
    let inputCachorro = document.getElementById('inputCachorro').value;
    let novoCachorro = new Cachorro(inputCachorro, 4);
    cachorros.push(novoCachorro)
    
    document.getElementById('inputCachorro').value = '';
    console.log(cachorros);
})

let adicionaGato = document.getElementById('btn-gato');

const gatos = [];

adicionaGato.addEventListener('click', function () {
    let inputGato = document.getElementById('inputGato').value;
    let novoGato = new Gato(inputGato, 4);
    gatos.push(novoGato);
    
    document.getElementById('inputGato').value = '';
    console.log(gatos);
})

let adicionaPassaro = document.getElementById('btn-passaro');

const passaros = [];

adicionaPassaro.addEventListener('click', function () {
    let inputPassaro = document.getElementById('inputPassaro').value;
    let novoPassaro = new Passaro(inputPassaro, 2);
    passaros.push(novoPassaro);
    
    document.getElementById('inputPassaro').value = '';
    console.log(passaros);
})

  return (
    
    <div>
      <label htmlFor="inputCachorro">Cadastre o seu cachorro abaixo:</label>
      <input id="inputCachorro" name="inputCachorro"/>
      <button id="btn-cachorro">Cadastrar</button>

      <label htmlFor="inputGato">Cadastre o seu gato abaixo:</label>
      <input id="inputGato" name="inputGato"/>
      <button id="btn-gato">Cadastrar</button>

      <label htmlFor="inputPassaro">Cadastre o seu passaro abaixo:</label>
      <input id="inputPassaro" name="inputPassaro"/>
      <button id="btn-passaro">Cadastrar</button>
    </div>
     


  )
}

export default App
