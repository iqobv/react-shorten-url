import { useEffect, useState } from "react";

export const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = document.body.clientWidth;
      width <= 850 ? setIsDesktop(false) : setIsDesktop(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isDesktop,
  };
};
