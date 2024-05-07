import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import './css/Home.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className="home">
        <img className="adelia" src="../images/illustrations/home/adelia.svg" alt="Adelia" />
        <img className="graphs" src="../images/illustrations/home/edge.svg" alt="Adelia" />
      </div>
      <Footer/>
    </>
  )
}

export default App
