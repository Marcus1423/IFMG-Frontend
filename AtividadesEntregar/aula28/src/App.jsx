import { useState } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import Card from './Components/Card.jsx'
import imagem from './img/LenovoIdeaPad.png'
import Card2 from './Components/Card2'
import { darkTheme, lightTheme } from './styles/theme'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle.js'
import Card3 from './Components/Card3.jsx'
import "./App.css"


function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    
    <BrowserRouter>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <GlobalStyle />
    <nav>
       <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Atividade 1</Link>
       <Link to="atividade2" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Atividade 2</Link>
       <Link to="atividade3" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Atividade 3</Link>
    </nav>
    <Routes>
      <Route path='/' element={
        <>
          <h1>Atividade 1: Card com CSS Molule</h1>
        <Card  imagem={imagem}
        titulo="Card Reutilizável"
        descricao="Este card usa CSS Modules e hover suave com variáveis CSS."/>
        </>
        }
        
      />

      <Route path='atividade2' element={
       <>
        <Card2 imagem={imagem}
        titulo="Card Reutilizável"
        descricao="Este card usa CSS Modules e hover suave com variáveis CSS."
      />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde' onClick={() => setIsDark(!isDark)}>
          {isDark ? "Modo claro" : "Modo escuro"}
        </button>
       </>
      }/>

      <Route path='atividade3' element={<Card3  imagem={imagem}
        titulo="Card Reutilizável"
        descricao="Este card usa CSS Modules e hover suave com variáveis CSS."/>} 
      />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
