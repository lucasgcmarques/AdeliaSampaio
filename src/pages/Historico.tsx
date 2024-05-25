import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { HISTORICO_DATA } from '../data/HISTORICO_DATA'

export default function Historico() {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-100">
        <div className="xl:mx-96 lg:mx-28 md:mx-16 mx-6 lg:pt-40 pt-16 lg:mb-28 mb-8">
          <h1 className="md:text-6xl text-4xl lg:mb-28 mb-12 font-extralight italic text-yellow uppercase">
            {HISTORICO_DATA.TITLE}
          </h1>
          <div className="space-y-6">
            {HISTORICO_DATA.TEXT.map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
