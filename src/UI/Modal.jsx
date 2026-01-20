import { useRef } from "react";
import UseOutSideClicker from "../hooks/useOutSideClicker";
import SimpleButtonIcon from "../components/SimpleButtonIcon";
import { CgClose } from "react-icons/cg";

function Modal({ children, setIsModalOpen }) {
  const refEl = useRef();
  function handleCloseModal() {
    setIsModalOpen(null);
  }
  UseOutSideClicker(refEl, handleCloseModal, true);
  return (
    <div className="flex items-center justify-center shadow-md bg-gray-200/30 backdrop-blur-sm absolute top-0 bottom-0 right-0 left-0 z-40">
      <div
        ref={refEl}
        className="relative bg-card dark:bg-card-dark p-6 rounded-md"
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
