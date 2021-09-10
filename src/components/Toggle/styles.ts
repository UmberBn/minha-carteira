import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;
export const ToggleLabel = styled.span`
`;
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    offColor: theme.colors.info,
    onColor: theme.colors.info,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
