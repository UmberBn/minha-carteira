import styled, { css } from 'styled-components';

interface IOpenSidebar {
  isOpen: boolean;
}

export const Container= styled.div<IOpenSidebar> `
  background-color: ${ (props) => props.theme.colors.secondary };
  border-right: 1px solid ${ (props) => props.theme.colors.gray };
  color: ${ (props) => props.theme.colors.white };
  grid-area: AS;
  padding-left: 20px;

  @media(max-width: 768px){
    ${props => props.isOpen && css`
      display: 'flex';
      flex-direction: column;
      position: absolute;
      z-index: 200;
      width: 50vw;
      height: 100vh;
      left: 0;
    } 
  `}
  }
  
  
`;

export const Header = styled.header`
  align-items: center;
  display: flex; 
  height: 70px;

  > .hamburger-react {
    margin-left: 50px;
  }
`;
export const Title = styled.h3`
  display: flex;
  margin-left: 10px;
`;
export const Logo = styled.img`
  height: 40px;
  width: 40px;
`;
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuItemLink = styled.a`
  align-items: center;
  color: ${ (props) => props.theme.colors.info };
  display: flex;
  margin: 7px 0;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: .7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const MenuItemButton = styled.button`
  align-items: center;
  color: ${ (props) => props.theme.colors.info };
  display: flex;
  margin: 7px 0;
  background: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: .7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }

`;
