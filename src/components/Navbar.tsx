import { NavLink } from 'react-router-dom'
import { LogoImg } from '../utils'

export const Navbar = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? 'var(--yellow)' : 'inherit',
    }
  }
  return (
    <header className="flex justify-between md:mx-28 mx-4 py-2">
      <img src={LogoImg} height={50} alt="Adélia Sampaio" />
      <nav className="flex items-center gap-4">
        <NavLink style={activeLink} to={'/'}>
          home
        </NavLink>
        <NavLink style={activeLink} to={'/quemsomos'}>
          quem somos
        </NavLink>
        <NavLink style={activeLink} to={'/linha-do-tempo'}>
          linha do tempo
        </NavLink>
        <NavLink style={activeLink} to={'/historico'}>
          histórico
        </NavLink>
        <NavLink style={activeLink} to={'/imprensa'}>
          imprensa
        </NavLink>
        <NavLink style={activeLink} to={'/oficinas'}>
          oficinas
        </NavLink>
        <NavLink style={activeLink} to={'/programacao'}>
          programação
        </NavLink>
      </nav>
    </header>
  )
}
