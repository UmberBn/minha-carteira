import styled from "styled-components";


interface ILegendProps {
  color: string;
};

export const Container = styled.div`
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;

  @media(max-width: 540px) {
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;
  > h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;

export const SideRight = styled.main`
  flex: 1;
  min-height:150px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
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
  padding-left: 16px;
  
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