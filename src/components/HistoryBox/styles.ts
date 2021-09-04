import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 7px;
  border-radius: 7px;
`;
export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

    > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  @media(max-width: 768px) {
    justify-content: space-around;
    align-items: center;
    > h2 {
      margin-bottom: 0px;
      padding-left: 0px;
  }
  }
`;

export const LegendContainer = styled.div`
  list-style: none;
  display: flex;
`;

export const Legend = styled.li<ILegendProps> `
  align-items: center;
  display: flex;
  margin-bottom: 7px;
  margin-left: 7px;
  padding-right: 16px;
  
  > div {
    background-color: ${(props) => props.color};
    border-radius: 7px;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px;
  }

  > span {
    margin-left: 5px;
  }
`;