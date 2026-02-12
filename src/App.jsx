import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskItem from './components/TaskForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/Projects'
import Completed from "./pages/Completed";
import About from "./pages/about";
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
      <TaskItem />
    </>
  )
}

export default App
