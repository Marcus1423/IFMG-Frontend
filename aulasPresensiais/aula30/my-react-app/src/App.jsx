import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Car  from './components/car.jsx'

function App() {

  const car1 = {

    name: "Ford",
    
    model: "Mustang",
    
    color: "red",
    
    year: 1969
    
    };

    const car2 = {

      name: "Chevrolet",
      
      model: "Camaro",
      
      color: "Blue",
      
      year: 2018
      
      };

  return (
    <>
    <Car carinfo={car1} />
    <Car carinfo={car2} />
    </>
  )
}

export default App
