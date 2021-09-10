import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.main`

`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;


  .tag-filter {
    background: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    margin: 0 10px;
    opacity: 0.5;
    transition: opacity .3s;

    &:hover {
      opacity: .7;
    }
  }

  .recurrent::after {
      border-bottom: 10px solid #E44C4E;
      content: '';
      display: block;
      margin: 0 auto;
      width: 55px;
    }

  .eventual::after {
      border-bottom: 10px solid #4E41F0;
      content: '';
      display: block;
      margin: 0 auto;
      width: 55px;
    }

  .tag-actived {
    opacity: 1;
  }
`;
