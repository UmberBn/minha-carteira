import React from 'react';
import { useAuth, useSidebar } from '../../context';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';
import {
  CloseButton,
  Container,
  Header,
  Logo,
  MenuContainer,
  MenuItemButton,
  MenuItemLink,
  Title,
  ToggleContainer
} from './styles';
import LogoSVG from '../../assets/logo.svg';
import {Spin as Hamburger} from 'hamburger-react'
import useWindowSize from '../../hooks/useWindowSize';
import Toggle from '../Toggle';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const {isOpen, changeIsOpen} = useSidebar();
  const windowSize = useWindowSize()
  return (
    <Container isOpen={isOpen}>
      {windowSize.width <= 768 && <CloseButton>
         <Hamburger toggle={changeIsOpen} toggled={isOpen}/>
      </CloseButton>}
      <Header>
        <Logo src={ LogoSVG } alt="Logo minha carteira" />
        <Title> Minha Carteira </Title>
      </Header>
      {windowSize.width <= 768 && <ToggleContainer>
         <Toggle />
      </ToggleContainer>}
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