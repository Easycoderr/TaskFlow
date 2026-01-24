import { HiMail, HiUser } from "react-icons/hi";
import { HiKey, HiLockClosed } from "react-icons/hi2";
import Button from "../../components/Button";
import { useState } from "react";
import { signUp } from "../../services/auth";
import { useUiStates } from "../../hooks/useUiContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { toast } from "react-toastify";

function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  // Watch the "password" field to use it for comparison
  const password = watch("password");
  const { dispatch } = useUiStates();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  function handleShowPass() {
    setShowPassword((show) => !show);
  }
  async function onSubmit(data) {
    const { email, password, fullName } = data;
    setLoading(true);
    setError("");
    try {
      await signUp({ email, password, fullName });
      reset();
      dispatch({ value: "CLOSE_MODAL" });
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-4 py-3 pb-4 px-2">
      <form action="" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* full name */}
        <Input
          inputType="text"
          inputName="fullName"
          label="Full name"
          icon={<HiUser />}
          error={errors.fullName}
          {...register("fullName", {
            required: "full name is requierd",
            pattern: {
              value: /^[A-Za-z," "]+$/i,
              message: "fullname should only contain letters",
            },
            maxLength: 20,
          })}
        />
        {/* email */}
        <Input
          inputType="email"
          inputName="email"
          label="Email address"
          icon={<HiMail />}
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {/* password */}
        <Input
          inputType={showPassword ? "text" : "password"}
          inputName="password"
          label="password"
          icon={<HiLockClosed />}
          error={errors.password}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: {
              hasNumber: (value) =>
                /\d/.test(value) || "Password must include at least one number",
              hasSpecialChar: (value) =>
                /[!@#$%^&*]/.test(value) ||
                "Include at least one special character",
            },
          })}
        />
        {/* confirm password */}
        <Input
          inputType={showPassword ? "text" : "password"}
          inputName="confirmPassword"
          label="Confirm password"
          icon={<HiKey />}
          error={errors.confirmPassword}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />
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
        <Button loading={loading} type="form">
          {loading ? "Signing up..." : "Sign up"}
        </Button>
        <span className="text-xs block max-w-xs leading-relaxed text-center mx-auto">
          By clicking on Sign up, you agree to our{" "}
          <a
            href="#"
            className="hover:underline transition-all duration-300 hover:text-secondary"
          >
            Terms and Conditions
          </a>{" "}
          of Use.
          {/*  To learn more about how Spotify collects, uses, shares and
          protects your personal data please read Spotify's Privacy Policy. */}
        </span>
        <div className="relative mt-5 w-full h-px bg-linear-to-l from-transparaent via-gray-700 to-transparent">
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

export default SignupForm;
