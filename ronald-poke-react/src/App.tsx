import './App.css'
import Navbar from './components/molecules/bars/Navbar'
import GamePage from './components/pages/GamePage'
import PokedexPage from './components/pages/PokedexPage'
import { GeneralProvider } from './modules/Context/GeneralProvider'
import { useRoutes, BrowserRouter } from 'react-router-dom'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',        element: <GamePage/> },
    { path: '/game',    element: <GamePage/> },
    { path: '/pokedex', element: <PokedexPage/> }
  ])
  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <GeneralProvider>
          <Navbar/>
          <AppRoutes/>
        </GeneralProvider>
      </BrowserRouter>
    </>
  )
}

export default App
