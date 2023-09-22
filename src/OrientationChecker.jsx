import { useState, useEffect } from "react";
import RotateDevice from "./components/RotateDevice";

export default function OrientationChecker({ children }) {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    checkOrientation();
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }

  return isPortrait ? <RotateDevice /> : children;
}
