
import { Award, BadgeCheck, Film, Layers } from "lucide-react";
import { Footer } from "../components/Footer";
import { Accordion, AccordionContent, AccordionTitle } from "../components/Linha/Accordion";
import { Navbar } from "../components/Navbar";
import '../css/Linha.css';
import { Carousel } from "../components/Carousel/Carousel";
import { images2019 } from "../Data/2019";

export default function Linha() {
  return (
    <>
      <Navbar/>
      <div className="linha">
        <h1 className="title">QUEM SOMOS</h1>

          <Accordion >
              <AccordionTitle ano="2021" color="var(--green)" title="V MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO" ></AccordionTitle>
            <AccordionContent>
              <div className="accordion-text">
                Prevista para os dias 21 a 25  de outubro, a IV Mostra Competitiva de Cinema Negro Adélia Sampaio estreia em formato online com ambrangência internacional. 
              </div>
            </AccordionContent>
          </Accordion>
          <Accordion >
              <AccordionTitle ano="2020" color="var(--orange)"  title="IV MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO" ></AccordionTitle>
            <AccordionContent>
              <div className="accordion-text">
              Prevista para os dias 21 a 25  de outubro, a IV Mostra Competitiva de Cinema Negro Adélia Sampaio estreia em formato online com ambrangência internacional. 
              </div>
            </AccordionContent>
          </Accordion>
          <Accordion >
              <AccordionTitle ano="2019" color="var(--red)"  title="III MOSTRA COMPETITIVA DE CINEMA NEGRO ADÉLIA SAMPAIO" >
                <div className="flex text-red gap-3">
                    <div className="flex gap-2">
                      <Film /> <div>89 filmes inscritos</div>
                    </div>
                    <div className="flex gap-2">
                      <Layers /> <div>9 categorias</div>
                    </div>
                    <div className="flex gap-2">
                      <BadgeCheck /> <div>21 selecionados</div>
                    </div>
                    <div className="flex gap-2">
                      <Award /> <div>9 premiados</div>
                    </div>
                </div>
              </AccordionTitle>
            <AccordionContent>
              <Carousel images={images2019}/>
              <div className="accordion-text">
                  <h3>
                    <span className="text-red font-italic font-weight-bold text-uppercase mr-3">Melhor Atriz_</span>
                    <span className="font-weight-bold mr-3">Mãe não Chora </span>
                    <span className="font-weight-normal">Vanessa Oliveira</span>
                  </h3>
                  <h3>
                    <span className="text-red font-italic font-weight-bold text-uppercase mr-3">Melhor Atriz_</span>
                    <span className="font-weight-bold mr-3">Mãe não Chora </span>
                    <span className="font-weight-normal">Vanessa Oliveira</span>
                  </h3>
                  <h3>
                    <span className="text-red font-italic font-weight-bold text-uppercase mr-3">Melhor Atriz_</span>
                    <span className="font-weight-bold mr-3">Mãe não Chora </span>
                    <span className="font-weight-normal">Vanessa Oliveira</span>
                  </h3>
                  <h3>
                    <span className="text-red font-italic font-weight-bold text-uppercase mr-3">Melhor Atriz_</span>
                    <span className="font-weight-bold mr-3">Mãe não Chora </span>
                    <span className="font-weight-normal">Vanessa Oliveira</span>
                  </h3>
                  <h3>
                    <span className="text-red font-italic font-weight-bold text-uppercase mr-3">Melhor Atriz_</span>
                    <span className="font-weight-bold mr-3">Mãe não Chora </span>
                    <span className="font-weight-normal">Vanessa Oliveira</span>
                  </h3>
              </div>
            </AccordionContent>
          </Accordion>
      </div>
      <Footer/>
    </>
  )
}
