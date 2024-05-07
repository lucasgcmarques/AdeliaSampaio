import { NavLink } from "react-router-dom"
import '../css/Navbar.css'

export const  Navbar = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "var(--yellow)" : "inherit",
    };
  }
  return (
    <nav>
      <img src="/images/brand/logo.svg" height={50} alt="Adélia Sampaio" />
      <ul>
        <li>
          <NavLink style={activeLink} to={"/"}>Home</NavLink>            
        </li>
        <li>
          <NavLink style={activeLink} to={"/quemsomos"}>quem somos</NavLink>
        </li>
        <li>
          <NavLink style={activeLink} to={"/linha-do-tempo"}>linha do tempo</NavLink>
        </li>
        <li>
          <NavLink style={activeLink} to={"/historico"}>histórico</NavLink>
        </li>
        <li>
          <NavLink style={activeLink} to={"/imprensa"}>imprensa</NavLink>
        </li>
        <li>
          <NavLink style={activeLink} to={"/oficinas"}>oficinas</NavLink>
        </li>
        <li>
          <NavLink style={activeLink} to={"/programacao"}>programação</NavLink>
        </li>
      </ul>
    </nav>
  )
}
