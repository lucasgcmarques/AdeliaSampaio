import { ReactNode } from "react";

// Criando Contexto
interface AccordionContextType {
  isActive: boolean;
  toggleIsActive: () => void;
}

// Criando Root para o Accordion
interface AccordionProps {
  children: ReactNode;
}

// Criando o pattern Title para o Accordion
interface AccordionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  ano: string
  title: string
  color: string
  children?: ReactNode
}

// Criando o pattern Content para o Accordion
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export type {
  AccordionProps,
  AccordionTitleProps,
  AccordionContentProps,
  AccordionContextType,
}