import { useEffect } from "react";

function UseOutSideClicker(ref, callBack, useCapture = false) {
  useEffect(() => {
    function handleOutSideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callBack();
      }
    }
    document.addEventListener("click", handleOutSideClick, useCapture);

    return () => {
      document.removeEventListener("click", handleOutSideClick, useCapture);
    };
  }, [ref, callBack, useCapture]);
}

export default UseOutSideClicker;
