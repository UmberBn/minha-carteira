import { Link } from 'react-router-dom';
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

  > .hamburger-react {
    justify-self: flex-end;
  }

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 200;
    width: 300px;
    height: 100vh;
    left: -100%;
    transition: all 0.8s;

    ${props => props.isOpen && css` 
      left: 0;
    `}
  }

  @media(max-width: 480px) {
    width: 100vw;
    border: none;
  }

  
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
`
export const Header = styled.header`
  align-items: center;
  display: flex; 
  height: 70px;
  @media(max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;
export const Title = styled.h3`
  display: flex;
  margin-left: 10px;
  
  @media(max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }

`;
export const Logo = styled.img`
  height: 40px;
  width: 40px;
`;
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const MenuItemLink = styled(Link)`
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

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`