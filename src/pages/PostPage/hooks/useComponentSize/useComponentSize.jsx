import { useState, useEffect, useRef } from "react";

export const useComponentSize = (fileUrl) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const componentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } =
        componentRef.current?.getBoundingClientRect() ?? {
          width: 0,
          height: 0,
        };
      setSize({ width, height });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [fileUrl]);
  console.log(size);
  console.log(componentRef);

  return [componentRef, size];
};
