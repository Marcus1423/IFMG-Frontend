import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import CarProducts from './pages/CarProducts'
import BikeProducts from './pages/BikeProducts'
import Info from './pages/Info'
import User from './pages/User'


function App() {
  
  return (
    <>
     <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/customer/Emil">Emil</Link> | 
            <Link to="/customer/Tobias">Tobias</Link> |
            <Link to="/customer/Linus">Linus</Link>
          </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='products' element={<Products/>}>
            <Route path="car" element={<CarProducts />} />
            <Route path="bike" element={<BikeProducts />} />
          </Route>
          <Route path="/customer/:firstname" element={<Info />} />
          <Route path='user/id:' element={<User/>}/>
        </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
