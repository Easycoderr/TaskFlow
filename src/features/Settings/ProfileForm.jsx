import { BsEye, BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import Accordion from "../../components/Accordion";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
function ProfileForm({ name }) {
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
  );
}

export default ProfileForm;
