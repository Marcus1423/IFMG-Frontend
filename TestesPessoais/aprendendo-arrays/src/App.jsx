import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdicionandoArray from './components/AdicionandoArray'
import RemoverArray from './components/RemoverArray'
import {AddAndRemove } from './components/AddAndRemove'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddAndRemove />
    </>
  )
}

export default App
