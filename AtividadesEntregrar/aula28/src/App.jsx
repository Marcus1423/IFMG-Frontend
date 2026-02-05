import { useState } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import Card from './Components/card'
import imagem from './img/LenovoIdeaPad.png'
import Card2 from './Components/Card2'
import { darkTheme, lightTheme } from './styles/theme'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle.js'


function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    
    <BrowserRouter>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <GlobalStyle />
    <nav>
       <Link to="/">Atividade 1</Link>
       <Link to="atividade2">Atividade 2</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Card  imagem={imagem}
        titulo="Card Reutilizável"
        descricao="Este card usa CSS Modules e hover suave com variáveis CSS."/>} 
      />

      <Route path='atividade2' element={
       <>
        <Card2 imagem={imagem}
        titulo="Card Reutilizável"
        descricao="Este card usa CSS Modules e hover suave com variáveis CSS."
      />
        <button onClick={() => setIsDark(!isDark)}>
          Alternar Tema
        </button>
       </>
      }/>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
