import React, { createContext, useState } from 'react';
import { useContext } from 'react';


export const SideBarContext = createContext<ISideBar>({} as ISideBar);

interface ISideBar {
  changeIsOpen(): void;
  isOpen: boolean;
}

const SideBarProvider: React.FC = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  const changeIsOpen = () => setIsOpen(!isOpen);

  const data = {
    isOpen,
    changeIsOpen,
  };

  return (
    <SideBarContext.Provider value={data}>
      {children}
    </SideBarContext.Provider>
  );
}

function useSidebar(): ISideBar {
  const context = useContext(SideBarContext);

  return context;
}

export {SideBarProvider, useSidebar};
