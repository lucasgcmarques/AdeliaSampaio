import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AdeliaImg, EdgeImg } from './utils'
import './css/Home.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="home">
        <img className="adelia" src={AdeliaImg} alt="Adelia" />
        <img className="graphs" src={EdgeImg} alt="Adelia" />
      </main>
      <Footer />
    </>
  )
}

export default App
