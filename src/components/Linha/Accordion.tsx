import { createContext, useContext, useState } from 'react'
import {
  AccordionContentProps,
  AccordionContextType,
  AccordionProps,
  AccordionTitleProps,
} from './AccordionTypes'

// Criando Contexto
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error(
      'useAccordionContext must be used within an AccordionProvider',
    )
  }
  return context
}

// Criando Root para o Accordion
export const Accordion = ({ children }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false)
  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <AccordionContext.Provider value={{ isActive, toggleIsActive }}>
      <div className="flex flex-col mb-12 w-full">{children}</div>
    </AccordionContext.Provider>
  )
}

// Criando o pattern Title para o Accordion
export const AccordionTitle = ({
  ano,
  title,
  color,
  children,
}: AccordionTitleProps) => {
  const { toggleIsActive } = useAccordionContext()
  return (
    <div className="flex cursor-pointer ml-auto w-2/3" onClick={toggleIsActive}>
      <span
        className={`text-${color} w-40 text-end font-semibold relative text-6xl top-2`}
      >
        {ano}
      </span>
      <div className="w-full">
        <h2
          className={`border-b-2  w-full  border-${color} text-${color} text-2xl italic pt-3 pb-4 pl-20`}
        >
          {title}
        </h2>
        <div className="flex flex-col overflow-hidden pl-20">{children}</div>
      </div>
    </div>
  )
}

// Criando o pattern Content para o Accordion
export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { isActive } = useAccordionContext()
  return (
    <div
      className={`flex flex-col overflow-hidden ${isActive ? 'show' : 'hide'} mt-6`}
    >
      {children}
    </div>
  )
}
