import { HiMail } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi2";
import Button from "../../components/Button";
import { useState } from "react";
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPass() {
    setShowPassword((show) => !show);
  }
  return (
    <div className="mt-4 py-3 pb-4 px-2">
      <form action="" className="space-y-5">
        {/* email */}
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder=" "
            className="peer bg-bg text-text  text-sm rounded-sm p-3 outline-none ring-[0.5px] focus:ring-2 focus:ring-primary focus:border-primary shadow-md w-full"
          />

          <label
            htmlFor="email"
            className="absolute  rounded-sm transition-all duration-300 ease-in-out pointer-events-none 
                 top-1/2 -translate-y-1/2 left-2 text-text-muted dark:text-text-muted-dark text-sm
                 peer-focus:-top-px peer-focus:text-xs peer-focus:text-primary
                 peer-[:not(:placeholder-shown)]:-top-px peer-[:not(:placeholder-shown)]:text-xs peer-focus:p-0.5 peer-[:not(:placeholder-shown)]:p-0.5 peer-focus:bg-bg peer-focus:dark:bg-bg-dark peer-[:not(:placeholder-shown)]:bg-bg peer-[:not(:placeholder-shown)]:dark:bg-bg-dark"
          >
            Email address
          </label>
          <span className="absolute dark:text-text peer-focus:text-primary top-1/2 -translate-y-1/2 right-2.5">
            <HiMail />
          </span>
        </div>
        {/* password */}
        <div className="relative mb-2.5">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder=" "
            className="peer bg-bg rounded-sm text-text text-sm p-3 outline-none ring-[0.5px] focus:ring-2 focus:ring-primary focus:border-primary shadow-md w-full"
          />
          {/* <!-- 2. Label follows the peer input --> */}
          <label
            htmlFor="password"
            className="absolute rounded-sm transition-all duration-300 ease-in-out pointer-events-none 
                 top-1/2 -translate-y-1/2 left-2 text-text-muted  dark:text-text-muted-dark text-sm
                 peer-focus:-top-px peer-focus:text-xs peer-focus:text-primary
                 peer-[:not(:placeholder-shown)]:-top-px peer-[:not(:placeholder-shown)]:text-xs peer-focus:p-0.5 peer-[:not(:placeholder-shown)]:p-0.5 peer-focus:bg-bg peer-focus:dark:bg-bg-dark peer-[:not(:placeholder-shown)]:bg-bg peer-[:not(:placeholder-shown)]:dark:bg-bg-dark"
          >
            Password
          </label>
          <span className="absolute dark:text-text peer-focus:text-primary top-1/2 -translate-y-1/2 right-2.5">
            <HiLockClosed />
          </span>
          {/* show password check */}
        </div>
        <div className="flex items-center gap-1 text-sm text-text dark:text-text-dark">
          <input
            type="checkbox"
            name="showpass"
            id="showpass"
            className="accent-primary hover:cursor-pointer"
            checked={showPassword}
            onChange={handleShowPass}
          />
          <label
            htmlFor="showpass"
            className="select-none hover:cursor-pointer"
          >
            Show Password
          </label>
        </div>
        <Button type="form">Log In</Button>
        <span className="flex">
          <a
            href="#"
            className="text-xs mx-auto inline-block hover:underline transition-all duration-300 hover:text-secondary"
          >
            Forget your passsword?
          </a>
        </span>
        <div className="relative w-full h-px bg-linear-to-l from-transparaent via-gray-700 to-transparent">
          <span className="text-xs bg-bg dark:bg-bg-dark text-text dark:text-text-dark absolute left-1/2 -translate-x-1/2 -top-2 px-0.5">
            Or
          </span>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <a href="#" title="Login with Google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </a>
          <a href="#" title="Login with facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45"
              height="45"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
