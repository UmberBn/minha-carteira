import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${ (props) => props.theme.colors.secondary };
  border-bottom: 1px solid ${ (props) => props.theme.colors.gray };
  color: ${ (props) => props.theme.colors.white };
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Profile = styled.div`
`
export const Welcome = styled.h3`
`
export const UserName = styled.span`
`
