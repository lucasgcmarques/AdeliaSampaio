import { Award, BadgeCheck, Film, Layers, Loader } from 'lucide-react'
import { Footer } from '../components/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from '../components/Linha/Accordion'
import { Navbar } from '../components/Navbar'
import { LINHA_DATA } from '../data/LINHA_DATA'
import { Carousel } from '../components/Carousel/Carousel'

export default function Linha() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pb-52 bg-zinc-100">
        <div className="xl:mx-96 lg:mx-28 md:mx-16 mx-6 lg:pt-40 pt-16 lg:mb-28 mb-8">
          <h1 className="md:text-6xl font-extralight text-4xl mb-6 italic text-green uppercase">
            Linha do Tempo
          </h1>
        </div>

        {LINHA_DATA.map((item, i) => (
          <Accordion key={i}>
            <AccordionTitle
              ano={item.ano}
              color={item.color}
              title={item.title}
            />
            <AccordionContent>
              {item.info && (
                <div
                  className={`xl:ml-[40%] lg:ml-[348px] md:ml-[190px] ml-[90px] text-${item.color}`}
                >
                  <div className="flex flex-col sm:flex-row gap-3 ">
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

                  <div className="flex gap-2 w-full text-purple mt-4">
                    <Loader />
                    <span className="italic">
                      Sessão de abertura: "{item.info.abertura.filme}" de{' '}
                      {item.info.abertura.autor}
                    </span>
                  </div>
                </div>
              )}
              {item.description && (
                <div className="max-w-[590px] xl:ml-[40%] lg:ml-[348px] md:ml-[190px] ml-[90px] ">
                  {item.description}
                </div>
              )}
              {item.galllery && <Carousel gallery={item.galllery} />}
              {item.premios &&
                item.premios.map((premio, i) => (
                  <div
                    className="mb-1.5 space-x-4 xl:ml-[40%] lg:ml-[348px] md:ml-[190px] ml-[90px] "
                    key={i}
                  >
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
