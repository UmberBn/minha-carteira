import styled from 'styled-components';

interface ITitleContainerProps {
  lineColor: string;
}
export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`;
export const TitleContainer = styled.div<ITitleContainerProps> `
  > h1 {
    color: ${(props) => props.theme.colors.white };

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid  ${ props => props.lineColor }
    }
  }

`;
export const Controllers = styled.div `
  display: flex;
  
`;