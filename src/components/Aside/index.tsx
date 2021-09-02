import React from 'react';
import { useAuth } from '../../context';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md'
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

const Aside: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <Container>
      <Header>
        <Logo src={ LogoSVG } alt="Logo minha carteira" />
        <Title> Minha Carteira </Title>
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