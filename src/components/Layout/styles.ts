import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  'AS MH'
  'AS CT';
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  height: 100vh;
  min-width: 315px;

  @media(max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas:
    'MH'
    'CT';

    overflow: hidden;
  }
`;
