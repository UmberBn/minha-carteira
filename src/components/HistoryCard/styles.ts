import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  align-items: center;
  background-color: ${ (props) => props.theme.colors.tertiary };
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 10px 0;
  padding: 12px 10px;
  position: relative;
  transition: all .3s;

  &:hover {
    opacity: .7;
    transform: translateX(10px); 
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }

  > div span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Tag = styled.div<ITagProps>`
  background-color: ${(props) => props.color };
  border-radius: 0 10px 10px 0;
  height: 60%;
  left: 0;
  position: absolute;
  width: 10px;
`;
