
import { Award, BadgeCheck, Film, Layers } from "lucide-react";
import { Footer } from "../components/Footer";
import { Accordion, AccordionContent, AccordionTitle } from "../components/Linha/Accordion";
import { Navbar } from "../components/Navbar";
import '../css/Linha.css';

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
                <div className="flex">
                    <div className="flex">
                      <Film /> 89 filmes inscritos
                    </div>
                    <div className="flex">
                      <Layers /> 9 categorias
                    </div>
                    <div className="flex">
                      <BadgeCheck /> 21 selecionados
                    </div>
                    <div className="flex">
                      <Award /> 9 premiados
                    </div>
                </div>
              </AccordionTitle>
            <AccordionContent>

              <div className="accordion-text">
              
              Prevista para os dias 21 a 25  de outubro, a IV Mostra Competitiva de Cinema Negro Adélia Sampaio estreia em formato online com ambrangência internacional. 
              </div>
            </AccordionContent>
          </Accordion>
      </div>
      <Footer/>
    </>
  )
}
