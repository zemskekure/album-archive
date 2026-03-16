import { useState, useCallback, useEffect } from "react";

export const useColorMode = () => {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("inverted", inverted);
  }, [inverted]);

  const toggle = useCallback(() => setInverted((prev) => !prev), []);

  return { inverted, toggle };
};
