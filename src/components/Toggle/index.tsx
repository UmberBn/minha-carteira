import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';
import { useTheme } from '../../context/ThemeContext'

const Toggle: React.FC = () => {
  const { changeTheme, currentTheme } = useTheme()
  return (
    <Container>
      <ToggleLabel>Ligth</ToggleLabel>
      <ToggleSelector
        checked={currentTheme.title === 'dark'}
        onChange={changeTheme}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}

export default Toggle;