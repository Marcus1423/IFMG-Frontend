import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import withBorder from './Components/withBorder'
import Greeting from './Components/Greeting'
import Div from './Components/Div'
import Mouse from './Components/Mouse'

function App() {
  const GreetingWithBorder = withBorder(Greeting);
  const DivWithBorder = withBorder(Div);

  return (
    <>
      <div>
        <Greeting name="John" />
        <GreetingWithBorder name="Jane" />
        <DivWithBorder name="Marcus" />
        <Mouse render={m => <h1>Posição: ({m.x}, {m.y})</h1>} />
      </div>
    </>
  )
}

export default App
