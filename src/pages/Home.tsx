import './css/Home.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { AdeliaImg, EdgeImg } from '../utils'

function Home() {
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

export default Home
