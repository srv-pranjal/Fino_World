import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarHidden, setIsSidebarHidden }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => useContext(SidebarContext);

export { SidebarProvider, useSidebar };
