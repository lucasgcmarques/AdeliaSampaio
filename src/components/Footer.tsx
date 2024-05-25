import { LogoWhiteImg } from '../utils'

const Divider = () => (
  <svg
    className="footer-divisor"
    width="5"
    height="48"
    viewBox="0 0 5 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.25"
      y="0.25"
      width="4.5"
      height="47.5"
      stroke="white"
      strokeWidth="0.5"
    />
  </svg>
)

export const Footer = () => {
  return (
    <footer className="bg-black gap-6 border-t border-white flex justify-center items-center py-12 text-white">
      <img className="max-h-16" src={LogoWhiteImg} alt="Mostra" />
      <Divider />
      <div className="flex flex-col text-center">
        <a href="https://linktr.ee/mostraadeliasampaio">
          <b>V Mostra Competitiva de Cinema Negro</b>
        </a>
        <a href="mailto:cineastaseprodutorasnegras@gmail.com">
          cineastaseprodutorasnegras@gmail.com
        </a>
      </div>
      <Divider />
      <div className="flex flex-col text-center">
        <a href="https://www.vakinha.com.br/vaquinha/valorizando-o-cinema-negro-mostra-adelia-sampaio">
          Vakinha Online
        </a>
        <a href="https://drive.google.com/file/d/1-mov7v5qsalT7JY010_ei79WMqdCy7G2/view">
          Filmes Selecionados 2022
        </a>
      </div>
      <Divider />
      <div className="flex items-center gap-1">
        <a href="https://www.facebook.com/mostraadeliasampaio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/mostraadeliasampaio/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
