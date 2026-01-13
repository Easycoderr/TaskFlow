import { HiMoon, HiSun } from "react-icons/hi2";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    isDarkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
    document.getElementById("year").innerHTML = new Date().getFullYear();
  });
  function handleDarkModeToggle() {
    setIsDarkMode((darkMode) => !darkMode);
  }
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark">
      {/* hero section */}
      <section id="hero" className="relative overflow-hidden min-h-screen">
        {/* header */}
        <header className="container mx-auto py-6 xl:px-32 flex justify-between items-center z-20 relative">
          {/* logo */}
          <div class="font-roba text-3xl text-primary select-none">
            <span class="bg-linear-to-l from-primary via-secondary to-primary bg-300 cursor-pointer  text-transparent bg-clip-text select-none animate-logo">
              TaskFlow
            </span>
          </div>
          {/* CTA */}
          <div className="flex text-gray-50  items-center gap-2">
            <Button
              type={isDarkMode ? "iconSun" : "iconMoon"}
              onClick={handleDarkModeToggle}
              title={
                isDarkMode
                  ? "click for switch to light mode"
                  : "click for switch to dark mode"
              }
            >
              {isDarkMode ? (
                <HiSun size={25} className="text-gray-800" />
              ) : (
                <HiMoon size={25} />
              )}
            </Button>
            <Button type="primary" title="sign up for create new account">
              Sign Up
            </Button>
            <Button type="secondary" title="Log in for open your account">
              Log In
            </Button>
          </div>
        </header>
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
          <Button type="cta">Sign Up Now!</Button>
        </div>
        {/* footer */}
      </section>
      <footer>
        <div class="container mx-auto md:px-5 px-2.5 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-14 pb-4">
          <div class="font-roba text-2xl text-primary mx-auto md:mx-0 sm:mr-auto select-none">
            <span class="bg-linear-to-l from-primary via-cyan-500 bg-300% cursor-pointer to-primary text-transparent bg-clip-text select-none animate-logo-anim">
              TaskFlow
            </span>
          </div>

          <ul class="flex sm:flex-row flex-col gap-4  sm:mx-0 sm:ml-auto text-gray-500 text-xs text-center">
            <li>
              <a
                href="#contact"
                class="hover:text-gray-800 transition-all duration-300"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-gray-800 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
          <div class="sm:col-span-2 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
          <div class="flex flex-row gap-4 items-center mx-auto">
            <a href="#" class="inline-block ">
              <BsFacebook />
            </a>
            <a href="#" class="inline-block">
              <BsInstagram />
            </a>
            <a href="#" class="inline-block">
              <BsTwitterX />
            </a>
          </div>

          <div class="mx-auto text-gray-500 text-xs mt-1">
            &copy;<span id="year">2025</span> TaskFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
