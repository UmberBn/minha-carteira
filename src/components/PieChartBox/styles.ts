import styled from 'styled-components';

interface ILegendProps {
  color: string;
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 7px;
  color:  ${(props) => props.theme.colors.white};
  display: flex;
  height: 260px;
  margin: 10px 0;
  width: 48%;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  overflow-y: scroll;
  height:175px;
  padding-right: 15px;

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

export const Legend = styled.li<ILegendProps>`
  align-items: center;
  display: flex;
  margin-bottom: 7px;
  
  > div {
    background-color: ${(props) => props.color};
    border-radius: 5px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 40px;
  }

  > span {
    margin-left: 5px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;