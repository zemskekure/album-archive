import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

interface ColorModeContextType {
  inverted: boolean;
  toggle: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  inverted: false,
  toggle: () => {},
});

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [inverted, setInverted] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("inverted", inverted);
  }, [inverted]);

  const toggle = useCallback(() => setInverted((prev) => !prev), []);

  return (
    <ColorModeContext.Provider value={{ inverted, toggle }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
