import { BsEye, BsPerson, BsTrash, BsTrash2 } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import Accordion from "../../components/Accordion";
import Input from "../../components/Input";
import { LuLogOut, LuTriangleAlert } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
function Profile() {
  const { state: user } = useAuth();
  const { display_name: name, email } = user.user.user_metadata;
  // USE FORM
  const {
    register,
    handleSubmit,
    reset,
    watch,

    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: name,
    },
  });
  const password = watch("password");
  function handleShowPassword(callBack) {
    callBack();
  }
  function onSave() {}
  return (
    <div className="rounded-md p-4 max-w-2xl  bg-card dark:bg-card-dark flex flex-col gap-6">
      <div className="flex items-center gap-8">
        {/* profile picture */}
        <div className="bg-primary rounded-full w-20 h-20 flex justify-center items-center">
          <span className="font-roba text-5xl">R</span>
        </div>
        {/* name and email */}
        <div className="flex flex-col gap-y-1">
          <span className="text-lg font-semibold tracking-wider text-text dark:text-text-dark">
            {name}
          </span>
          <span className="text-sm tracking-wider text-text-muted dark:text-text-muted-dark">
            {email}
          </span>
        </div>
      </div>
      {/* fields */}
      <form action="" onSubmit={handleSubmit(onSave)}>
        <div className="flex gap-2 flex-col">
          <Accordion
            title="Personal Information"
            icon={<BsPerson className="text-primary" />}
          >
            <Input
              inputType="text"
              inputName="fullName"
              label="Full name"
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
          </Accordion>
          <Accordion
            title="Chnage password"
            icon={<BiLockAlt className="text-primary" />}
          >
            <div className="flex gap-3 flex-col">
              <Input
                onShowPassword={handleShowPassword}
                inputType="password"
                inputName="password"
                label="Password"
                icon={<BsEye />}
                error={errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  validate: {
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      "Password must include at least one number",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) ||
                      "Include at least one special character",
                  },
                })}
              />
              {/* confirm password */}
              <Input
                onShowPassword={handleShowPassword}
                inputType="password"
                inputName="confirmPassword"
                label="Confirm password"
                icon={<BsEye />}
                error={errors.confirmPassword}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />

              <Input
                onShowPassword={handleShowPassword}
                inputType="password"
                inputName="currentPassword"
                label="Current password"
                icon={<BsEye />}
                error={errors.password}
                {...register("currentPassword", {
                  required: "Current password is required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters",
                  },
                  validate: {
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      "Password must include at least one number",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) ||
                      "Include at least one special character",
                  },
                })}
              />
            </div>
          </Accordion>
          {/* save & Cancel */}
          <div className="flex items-center justify-end">
            <div className="flex gap-2 ">
              <button
                type="reset"
                onClick={() => reset}
                aria-label="cancel"
                className="tracking-wide text-sm bg-red-600/80 text-red-100 hover:bg-red-600/50 transition-all duration-300 cursor-pointer rounded-md px-3 py-1.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                aria-label="save"
                className="tracking-wide text-sm bg-green-600/80 text-green-100 hover:bg-green-600/50 transition-all duration-300 cursor-pointer rounded-md px-3 py-1.5"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* danger zone */}
      <div className="mt-5 flex flex-col gap-4">
        {/* log out */}
        <button
          type="button"
          aria-label="logout account"
          className="flex items-center gap-2 border shadow-sm rounded-md p-3 justify-center border-red-300 bg-red-300/20 dark:text-red-100 text-red-950  cursor-pointer group"
        >
          <span>
            <LuLogOut className="group-hover:translate-x-1 transition-all duration-300" />
          </span>
          <span className="tracking-wide text-sm">Logout</span>
        </button>
        {/* delete account */}
        <div className="flex flex-col gap-2 shadow-sm  bg-red-200/30 dark:bg-transparent p-2 border border-red-500/20 rounded-md">
          <h3 className="font-semibold flex items-center gap-1 text-red-600/80">
            <span>
              <LuTriangleAlert />
            </span>
            <span>Danger zone</span>
          </h3>
          <p className="leading-relaxed text-sm">
            This action cannot be undone. All your data will be permanently
            deleted.
          </p>
          <button
            type="button"
            aria-label="logout account"
            className="flex items-center gap-2 border rounded-md p-3 justify-center border-red-500 bg-red-500/20 dark:text-red-50 text-red-950  cursor-pointer group"
          >
            <span>
              <BsTrash className="transition-all duration-300" />
            </span>
            <span className="tracking-wide text-sm">Delete Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
