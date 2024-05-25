import { Award, BadgeCheck, Film, Layers } from 'lucide-react'
import { Footer } from '../components/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from '../components/Linha/Accordion'
import { Navbar } from '../components/Navbar'
import '../css/Linha.css'
import { LINHA_DATA } from '../data/LINHA_DATA'
import { Carousel } from '../components/Carousel/Carousel'

export default function Linha() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pb-52 bg-zinc-100">
        <div className="lg:mx-96 md:mx-28 mx-6 pt-60 mb-28">
          <h1 className="md:text-6xl text-4xl mb-6 italic text-green uppercase">
            Linha do Tempo
          </h1>
        </div>

        {LINHA_DATA.map((item, i) => (
          <Accordion key={i}>
            <AccordionTitle
              ano={item.ano}
              color={item.color}
              title={item.title}
            >
              {item.info && (
                <div className={`flex text-${item.color} gap-3`}>
                  <div className="flex gap-2">
                    <Film />{' '}
                    <div>{item.info.filmesInscritos} filmes inscritos</div>
                  </div>
                  <div className="flex gap-2">
                    <Layers /> <div>{item.info.categorias} categorias</div>
                  </div>
                  <div className="flex gap-2">
                    <BadgeCheck />{' '}
                    <div>{item.info.selecionados} selecionados</div>
                  </div>
                  <div className="flex gap-2">
                    <Award /> <div>{item.info.premiados} premiados</div>
                  </div>
                </div>
              )}
            </AccordionTitle>
            <AccordionContent>
              {item.description && (
                <div className="max-w-[590px] ml-[48%]">{item.description}</div>
              )}
              {item.galllery && <Carousel gallery={item.galllery} />}
              {item.premios &&
                item.premios.map((premio, i) => (
                  <div className="mb-1.5 space-x-4 ml-[48%]" key={i}>
                    {premio.categoria && (
                      <span
                        className={`font-bold text-${item.color} italic uppercase`}
                      >
                        {premio.categoria}_
                      </span>
                    )}
                    {premio.filme && (
                      <span className="font-bold text-zinc-500">
                        {premio.filme}
                      </span>
                    )}
                    {premio.vencedor && (
                      <span className=" text-zinc-500">{premio.vencedor}</span>
                    )}
                  </div>
                ))}
            </AccordionContent>
          </Accordion>
        ))}
      </main>
      <Footer />
    </>
  )
}
