import { createContext, useContext, useState } from "react";
import { AccordionContentProps, AccordionContextType, AccordionProps, AccordionTitleProps } from "./AccordionTypes";

// Criando Contexto
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }
  return context;
};

// Criando Root para o Accordion
export const Accordion = ({
  children,
}: AccordionProps) => {

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <AccordionContext.Provider value={{ isActive, toggleIsActive }}>
      <div className="accordion">
          {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Criando o pattern Title para o Accordion
export const AccordionTitle = ({
  ano,
  title,
  color,
  children,
}: AccordionTitleProps) => {
  const { toggleIsActive } = useAccordionContext();
  return (
    <div className="accordion-title" onClick={toggleIsActive}>
      <span style={{borderColor: color, color: color}}>{ano}</span>
      <div className="w-full">
        <h2 style={{borderColor: color, color: color}}>{title}</h2> 
        <div className="accordion-info">
            {children}
        </div>
      </div>
    </div>
  );
};

// Criando o pattern Content para o Accordion
export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { isActive } = useAccordionContext();
  return (
    <div className={`accordion-content ${isActive ? "show" : "hide"}`}>
      {children}
    </div>
  );
};
