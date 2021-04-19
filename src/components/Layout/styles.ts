import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  'AS MH'
  'AS CT';
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  height: 100vh;
`;
