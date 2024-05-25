import { NavLink } from 'react-router-dom'
import { LogoImg } from '../utils'

export const Navbar = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'text-yellow' : ''
  }
  return (
    <header className="flex justify-between md:mx-28 mx-4 py-2">
      <img src={LogoImg} height={50} alt="Adélia Sampaio" />
      <nav className="flex items-center gap-4">
        <NavLink className={activeLink} to={'/'}>
          home
        </NavLink>
        <NavLink className={activeLink} to={'/quemsomos'}>
          quem somos
        </NavLink>
        <NavLink className={activeLink} to={'/linha-do-tempo'}>
          linha do tempo
        </NavLink>
        <NavLink className={activeLink} to={'/historico'}>
          histórico
        </NavLink>
        <NavLink className={activeLink} to={'/imprensa'}>
          imprensa
        </NavLink>
        <NavLink className={activeLink} to={'/oficinas'}>
          oficinas
        </NavLink>
        <NavLink className={activeLink} to={'/programacao'}>
          programação
        </NavLink>
      </nav>
    </header>
  )
}
