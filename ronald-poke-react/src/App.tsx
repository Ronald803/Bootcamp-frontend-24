import './App.css'
import Navbar from './components/molecules/bars/Navbar'
import GamePage from './components/pages/GamePage'
import { GeneralProvider } from './modules/Context/GeneralProvider'

function App() {

  return (
    <>
      <GeneralProvider>
        <Navbar/>
        <GamePage/>
      </GeneralProvider>
    </>
  )
}

export default App
