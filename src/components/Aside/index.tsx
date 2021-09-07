import React from 'react';
import { useAuth, useSidebar } from '../../context';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';
import {
  Container,
  Header,
  Logo,
  MenuContainer,
  MenuItemButton,
  MenuItemLink,
  Title
} from './styles';
import LogoSVG from '../../assets/logo.svg';
import {Spin as Hamburger} from 'hamburger-react'
import useWindowSize from '../../hooks/useWindowSize';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const {isOpen, changeIsOpen} = useSidebar();
  const windowSize = useWindowSize()
  return (
    <Container isOpen={isOpen}>
      <Header>
        <Logo src={ LogoSVG } alt="Logo minha carteira" />
        <Title> Minha Carteira </Title>
        {windowSize.width <= 768 && <Hamburger toggle={changeIsOpen} toggled={isOpen}/>}
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dasboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        <MenuItemButton onClick={signOut} >
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
}

export default Aside;