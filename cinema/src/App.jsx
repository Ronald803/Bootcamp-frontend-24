import './App.css'
import { useState } from 'react';
import CinemaSizeForm from './components/CinemaSizeForm';
import CinemaComponent from './components/CinemaComponent';
function App() {
  const [cinemaSize, setCinemaSize] = useState({x:2,y:3})
  const [cinemaCreated, setCinemaCreated] = useState(false)
  return (
    <div>
      {
        cinemaCreated
        ?
        <CinemaComponent cinemaSize={cinemaSize}/>
        :
        <CinemaSizeForm
          setCinemaCreated={setCinemaCreated}
          setCinemaSize={setCinemaSize}
        />
      }
    </div>
  )
}

export default App
