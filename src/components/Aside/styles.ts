import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${ (props) => props.theme.colors.secondary };
  border-right: 1px solid ${ (props) => props.theme.colors.gray };
  color: ${ (props) => props.theme.colors.white };
  grid-area: AS;
  padding-left: 20px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 70px;
`;
export const Title = styled.h3`
  display: flex;
  margin-left: 10px;
`;
export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuItemLink = styled.a`
  color: ${ (props) => props.theme.colors.info };
  display: flex;
  align-items: center;
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