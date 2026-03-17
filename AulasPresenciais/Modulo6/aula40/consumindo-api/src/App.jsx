import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exemplo1 from './Components/Exemplo1'
import AtividadeAxios from './Components/AtividadeAxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AtividadeAxios />
    </>
  )
}

export default App
