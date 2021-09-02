import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';
import dark from '../styles/themes/dark';
import ligth from '../styles/themes/light';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IThemeContext {
  changeTheme(): void;
  currentTheme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
    black: string;
    gray: string;
    success: string;
    info: string;
    warning: string;
  };
  
}

const ThemeProvider: React.FC = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState<ITheme>(() => {
    const savedTheme = getLocalStorage('@my-wallet:Theme')
    return savedTheme || dark
  })
  const changeTheme = () => {
    if(currentTheme.title === "dark") {
      setCurrentTheme(ligth)
      setLocalStorage('@my-wallet:Theme', ligth)
    } else {
      setCurrentTheme(dark)
      setLocalStorage('@my-wallet:Theme', dark)
    }
  }

  const data = {
    changeTheme,
    currentTheme,
  };

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext)

  return context
}

export {ThemeProvider, useTheme};
