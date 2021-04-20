import styled from 'styled-components';

interface IContainerProps {
  color: string;
};

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};
  border-radius: 7px;
  color: ${(props) => props.theme.colors.white};
  height: 150px;
  margin: 10px 0;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
  width: 32%;
  
  > img {
    opacity: .3;
    position: absolute;
    right: -28px;
    top: -10px;
    height: 110%;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    bottom: 10px;
    font-size: 12px;
    position: absolute;
  }
`;