import { HeaderContainer } from './styles'

import { Scroll, Timer } from 'phosphor-react'
import logoIgnite from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Temporizador">
          <Timer size="2.4rem" />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size="2.4rem" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
