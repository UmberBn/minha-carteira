import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${ (props) => props.theme.colors.secondary };
  color: ${ (props) => props.theme.colors.white };
  grid-area: AS;
`;
