import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${ (props) => props.theme.colors.primary };
  color: ${ (props) => props.theme.colors.white };
  grid-area: CT;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  padding: 25px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
