import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AdeliaImg, EdgeImg } from './utils'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col w-full justify-between relative bg-yellow">
        <img
          className="lg:h-full lg:absolute left-0"
          src={AdeliaImg}
          alt="Adelia"
        />
        <img
          className="lg:h-full lg:absolute right-0"
          src={EdgeImg}
          alt="Adelia"
        />
      </main>
      <Footer />
    </>
  )
}

export default App
