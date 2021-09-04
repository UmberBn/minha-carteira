import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 7px;
  color:  ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  margin: 10px 0;
  padding: 30px;
  width: 48%;

  > header img {
    width: 35px;
    margin-left: 7px;
  }

  > header p {
    font-size: 18px;
  }

  @media(max-width: 768px){
    width: 100%;
    text-align: center;
    height: auto;
  }
`;
