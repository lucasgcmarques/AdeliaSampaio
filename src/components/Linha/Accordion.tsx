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
    <div
      className="flex cursor-pointer xl:ml-96 lg:ml-28  md:ml-16 ml-6"
      onClick={toggleIsActive}
    >
      <span
        className={`text-${color} lg:w-40  text-start mr-2 font-semibold md:relative lg:text-6xl md:text-4xl text-2xl md:top-2`}
      >
        {ano}
      </span>
      <div className="w-full">
        <h2
          className={`border-b-2  w-full  border-${color} text-${color} text-2xl italic md:pt-3 lg:pb-4 lg:pl-20 md:pl-8 `}
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
      className={`flex flex-col overflow-hidden transition-all duration-[0.4s] ease-in ${isActive ? 'max-h-[1000px]' : 'max-h-0'} mt-6`}
    >
      {children}
    </div>
  )
}
