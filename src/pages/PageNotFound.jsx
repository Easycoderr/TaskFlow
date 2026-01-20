import { TbError404 } from "react-icons/tb";
import Button from "../components/Button";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="z-60 flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 h-screen bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
      <div className="flex flex-col gap-5">
        <p className="text-3xl md:text-5xl flex items-center gap-2">
          Page not found <TbError404 size={50} className="text-red-500" />
        </p>
        <span className="mx-auto">
          <Button
            type="cancel"
            type2="button"
            onClick={() => navigate("/dashboard")}
          >
            <span className="flex items-center gap-2 mx-auto text-lg md:text-xl">
              <BiLeftArrowAlt size={24} />
              Go Back
            </span>
          </Button>
        </span>
      </div>
    </div>
  );
}

export default PageNotFound;
