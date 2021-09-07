import styled from 'styled-components';

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;

  @media(max-width: 375px){ 
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleContainer = styled.div<ITitleContainerProps> `
  margin-bottom: 5px;
  > h1 {
    color: ${(props) => props.theme.colors.white };

    &::after {
      content: '';
      border-bottom: 10px solid  ${ props => props.lineColor };
      display: block;
      width: 55px;
    }
  }

  @media(max-width: 375px){
    > h1 {
      &::after {
      width: 120px;
    }
    }
  }
`;

export const Controllers = styled.div `
  display: flex;
`;
