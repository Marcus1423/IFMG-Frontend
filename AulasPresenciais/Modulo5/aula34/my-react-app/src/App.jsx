import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Evento from './components/Evento'
import ReactHooKForm from './components/ReactHookForm'

function App() {

  return (
    <>
      <Evento />
      <Form />
      <ReactHooKForm />
    </>
  )
}

export default App
