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

  @media(max-width: 768px){
    width: 100%;
  }

  @media(max-width: 640px){
    flex-direction: column;
    height: auto;
  }

  @media(max-width: 300px){
    width: 90%;
    flex-direction: column;
    height: auto;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  @media(max-width: 768px){
    margin-left: 70px;
  }

  @media(max-width: 640px){
    margin-bottom: 0px;
    margin-left: 0px;
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

  @media(max-width: 640px){
    height: auto;
    display: flex;
    justify-content: space-around;
    padding-right: 0px;
  }

  @media(max-width: 300px){
    display: block;
  }
`;

export const Legend = styled.li<ILegendProps>`
  align-items: center;
  display: flex;
  margin-bottom: 7px;
  
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

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media(max-width: 640px){
    display: block;
    margin: 0 auto;
    height: 250px;
    width: 250px;
  }

  @media(max-width: 300px){
    height: 200px;
    width: 200px;
  }
`;