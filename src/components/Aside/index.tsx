import React from 'react';
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
  MenuItemLink,
  Title
} from './styles';
import LogoSVG from '../../assets/logo.svg';

const Aside: React.FC = () => {
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
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;