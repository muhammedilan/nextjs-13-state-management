import { cloneElement, useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) =>
      !ref.current?.contains(e.target) && onClickAway();

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return cloneElement(children, { ref });
};

export default ClickAwayListener;
