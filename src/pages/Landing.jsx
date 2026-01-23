import Button from "../components/Button";
import Footer from "../UI/Footer";
import Header from "../features/landing/components/Header";
import Form from "../features/landing/Form";
import LoginForm from "../features/landing/LoginForm";
import SignupForm from "../features/landing/SignupForm";
import Modal from "../UI/Modal";
import { useUiStates } from "../hooks/useUiContext";
import { ToastContainer } from "react-toastify";

function Landing() {
  const { modal, dispatch } = useUiStates();
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* hero section */}
      {modal && (
        <Modal>
          <Form>{modal === "login" ? <LoginForm /> : <SignupForm />}</Form>
        </Modal>
      )}
      <section id="hero" className="relative overflow-hidden min-h-screen">
        {/* header */}
        <Header />
        {/* animate shapes */}
        <div className="bg-primary h-48 w-48  md:h-68 md:w-68 rotate-45 absolute opacity-40 rounded-sm top-40 -right-40"></div>
        <div className="bg-secondary h-48 w-48 md:h-68 md:w-68 rotate-45 absolute opacity-40 rounded-sm bottom-40 -left-40"></div>
        <div className="bg-primary h-18 w-18 md:h-38 md:w-38 rotate-45 opacity-30 rounded-sm animate-orbit"></div>
        <div className="bg-secondary h-18 w-18 md:h-48 md:w-48 rotate-45 opacity-30 rounded-sm animate-orbit-slow absolute bottom-34 right-1/2"></div>
        <div className="bg-secondary h-18 w-18 md:h-38 md:w-38 rotate-45 opacity-30 rounded-sm animate-spin-orbit absolute top-34 right-58 md:78"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>
        <div className="container relative z-40 py-6 xl:px-32 mx-auto text-center flex items-center flex-col space-y-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-text text-center dark:text-text-dark leading-tight tracking-tight z-50 relative">
            Focus on what matters today
          </h1>
          <p className="text-muted dark:text-muted-dark leading-relaxed max-w-88 sm:max-w-96">
            TaskFlow helps you organize your daily tasks with clarity and
            intention — without overwhelm.
          </p>
          <Button
            type="cta"
            onClick={() =>
              dispatch({ value: "OPEN_MODAL", payload: { modal: "signup" } })
            }
          >
            Sign Up Now!
          </Button>
        </div>
        {/* footer */}
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
