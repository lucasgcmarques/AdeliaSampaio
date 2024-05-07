// import { NavLink } from "react-router-dom"
import '../css/Footer.css'

export const Footer = () => {
  // const activeLink = ({ isActive }: { isActive: boolean }) => {
  //   return {
  //     color: isActive ? "var(--yellow)" : "inherit",
  //   };
  // }
  return (
    <footer className="footer">
      <img className="logo-footer" src="../images/brand/logo-white.svg" alt="Mostra" />

      <svg className="footer-divisor" width="5" height="48" viewBox="0 0 5 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" y="0.25" width="4.5" height="47.5" stroke="white" stroke-width="0.5" />
      </svg>

      <div className="footer-menu">
        <a href="https://linktr.ee/mostraadeliasampaio"><b>V Mostra Competitiva de Cinema Negro</b></a>
        <a href="mailto:cineastaseprodutorasnegras@gmail.com">cineastaseprodutorasnegras@gmail.com</a>
      </div>

      <svg className="footer-divisor" width="5" height="48" viewBox="0 0 5 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" y="0.25" width="4.5" height="47.5" stroke="white" stroke-width="0.5" />
      </svg>

      <div className="footer-contact">
        <a href="https://www.vakinha.com.br/vaquinha/valorizando-o-cinema-negro-mostra-adelia-sampaio">Vakinha Online</a>
        <a href="https://drive.google.com/file/d/1-mov7v5qsalT7JY010_ei79WMqdCy7G2/view">Filmes Selecionados 2022</a>
      </div>

      <svg className="footer-divisor" width="5" height="48" viewBox="0 0 5 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" y="0.25" width="4.5" height="47.5" stroke="white" stroke-width="0.5" />
      </svg>


      <div className="social-links">
        <a href="https://www.facebook.com/mostraadeliasampaio" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
        <a href="https://www.instagram.com/mostraadeliasampaio/" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
    </footer>
  )
}
