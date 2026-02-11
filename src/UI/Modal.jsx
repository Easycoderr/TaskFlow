import { useEffect, useRef } from "react";
import UseOutSideClicker from "../hooks/useOutSideClicker";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import { CgClose } from "react-icons/cg";
import { useUiStates } from "../hooks/useUiContext";

function Modal({ children }) {
  const { dispatch } = useUiStates();
  const refEl = useRef();
  useEffect(() => {
    document.addEventListener("keydown", handleCloseModal);
    return () => {
      document.addEventListener("keydown", handleCloseModal);
    };
  }, []);
  function handleCloseModal(event) {
    if (event?.key && event?.key === "Escape") {
      dispatch({ value: "CLOSE_MODAL" });
    } else if (!event?.key) dispatch({ value: "CLOSE_MODAL" });
  }
  UseOutSideClicker(refEl, handleCloseModal, true);
  return (
    <div className="flex items-center justify-center shadow-md bg-gray-200/30 backdrop-blur-sm fixed top-0 bottom-0 right-0 left-0 z-100">
      <div
        ref={refEl}
        className="relative bg-card dark:bg-card-dark p-6 mx-1 md:mx-0 rounded-md"
      >
        <span className="absolute top-1 right-1">
          <SimpleButtonIcon onClick={handleCloseModal}>
            <CgClose
              size={22}
              className="group-hover:text-red-300 group-hover:scale-105 transition-all duration-300"
            />
          </SimpleButtonIcon>
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
