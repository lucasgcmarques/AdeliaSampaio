import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { QUEMSOMOS_TEXT } from '../data/QUEMSOMOS_DATA'

export default function Quemsomos() {
  return (
    <>
      <Navbar />
      <main className="bg-zinc-100">
        <div className="xl:mx-96 lg:mx-28 md:mx-16 mx-6 lg:pt-40 pt-16 lg:mb-28 mb-8">
          <div className="mb-28 justify-text">
            <h1 className="md:text-6xl text-4xl lg:mb-28 mb-12 font-extralight italic text-green uppercase">
              {QUEMSOMOS_TEXT.TITLE}
            </h1>
            <div className="space-y-6">
              {QUEMSOMOS_TEXT.TEXT.map((text) => (
                <div key={text}>{text}</div>
              ))}
            </div>
          </div>
          <div className="py-28">
            <h1 className="text-6xl mb-6 italic text-green">EQUIPE</h1>
            {QUEMSOMOS_TEXT.EQUIPE.map((equipe, i) => (
              <div key={i} className="flex mt-28 gap-8">
                <img
                  className="w-1/3 h-fit"
                  src={equipe.image}
                  alt={equipe.name}
                />
                <div className="mt-8 w-2/3">
                  <h3 className="text-3xl italic mb-3 text-green">
                    {equipe.name}
                  </h3>
                  {equipe.description.map((desc) => (
                    <p className="mb-3 font-light text-sm" key={desc}>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
