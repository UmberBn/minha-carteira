import { notification } from 'antd';
import React, {createContext, useContext, useState} from 'react'
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../helpers/localStorage';

interface IAuthContext {
  signIn(email: string, password: string): void;
  signOut(): void;
  logged: boolean; 
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = getLocalStorage('@minha-carteira:logged');
    
    return !!isLogged
  })

  const signIn = (email: string, password: string) => {
    if(email === "humberto@minhacarteira.com" && password==="123"){
      setLocalStorage('@minha-carteira:logged', true)
      setLogged(true)
    } else {
      notification.error({
        message: "Email ou senha incorretos",
        duration: 3,
      })
    }
  }

  const signOut = () => {
    removeLocalStorage('@minha-carteira:logged')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{signIn, signOut, logged}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}

export {useAuth, AuthProvider}