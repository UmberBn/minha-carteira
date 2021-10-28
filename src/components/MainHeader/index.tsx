import React, { useMemo } from 'react';
import {
  Container,
  Profile,
  Welcome,
  UserName
} from './styles';
import { emojis } from '../../utils/emojis';
import Toggle from '../Toggle';
import useWindowSize from '../../hooks/useWindowSize';
import { Spin as Hamburger } from 'hamburger-react'
import { useSidebar } from '../../context';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice];
  }, [])

  const size = useWindowSize();
  const { changeIsOpen, isOpen } = useSidebar()
  return (
    <Container>
      { size.width <= 768 ? 
        <Hamburger toggle={changeIsOpen} toggled={isOpen}/>
       :
         <Toggle />
      }
      <Profile>
        <Welcome>
          Olá, { emoji }
        </Welcome>
        <UserName>
          Humberto
        </UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;