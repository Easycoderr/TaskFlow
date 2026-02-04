import { BsEye, BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import Accordion from "../../components/Accordion";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import useUpdateUser from "./useUpdateUser";
function ProfileForm({ name }) {
  const { mutate: updateMutate, isPending } = useUpdateUser();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: name,
    },
  });
  //   const password = watch("password");
  function handleShowPassword(callBack) {
    callBack();
  }
  async function onSave(data) {
    console.log("h");
    const { password, fullName } = data;
    console.log(fullName);
    if (!fullName === "" || !(fullName.toLowerCase() === name.toLowerCase())) {
      console.log("jjuj");
      const userData = { display_name: fullName };
      updateMutate(userData);
    }
  }
  return (
    <form action="" onSubmit={handleSubmit(onSave)}>
      <div className="flex gap-2 flex-col">
        <Accordion
          title="Personal Information"
          icon={
            <span className="bg-primary/20 p-1 rounded-md">
              <BsPerson className="text-primary" />
            </span>
          }
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
          icon={
            <span className="bg-secondary/20 p-1 rounded-md">
              <BiLockAlt className="text-secondary" />
            </span>
          }
        >
          <div className="flex gap-3 flex-col">
            <Input
              onShowPassword={handleShowPassword}
              inputType="password"
              inputName="password"
              label="New Password"
              icon={<BsEye />}
              error={errors.password}
              //   {...register("password", {
              //     minLength: {
              //       value: 8,
              //       message: "Password must be at least 8 characters",
              //     },
              //     validate: {
              //       hasNumber: (value) =>
              //         /\d/.test(value) ||
              //         "Password must include at least one number",
              //       hasSpecialChar: (value) =>
              //         /[!@#$%^&*]/.test(value) ||
              //         "Include at least one special character",
              //     },
              //   })}
            />
            {/* confirm password */}
            <Input
              onShowPassword={handleShowPassword}
              inputType="password"
              inputName="confirmPassword"
              label="Confirm password"
              icon={<BsEye />}
              //   error={errors.confirmPassword}
              //   {...register("confirmPassword", {
              //     // required: "Please confirm your password",
              //     validate: (value) =>
              //       value === password || "The passwords do not match",
              //   })}
            />

            <Input
              onShowPassword={handleShowPassword}
              inputType="password"
              inputName="currentPassword"
              label="Current password"
              icon={<BsEye />}
              error={errors.password}
              //   {...register("currentPassword", {
              //     // required: "Current password is required",
              //     minLength: {
              //       value: 8,
              //       message: "password must be at least 8 characters",
              //     },
              //     validate: {
              //       hasNumber: (value) =>
              //         /\d/.test(value) ||
              //         "Password must include at least one number",
              //       hasSpecialChar: (value) =>
              //         /[!@#$%^&*]/.test(value) ||
              //         "Include at least one special character",
              //     },
              //   })}
            />
          </div>
        </Accordion>
        {/* save & Cancel */}
        <div className="flex items-center justify-end">
          <div className="flex gap-2 ">
            <button
              disabled={isPending}
              type="reset"
              onClick={() => reset}
              aria-label="cancel"
              className="tracking-wide text-sm bg-red-600/80 text-red-100 hover:bg-red-600/50 transition-all duration-300 cursor-pointer rounded-md px-3 py-1.5"
            >
              Cancel
            </button>
            <button
              disabled={isPending}
              type="submit"
              aria-label="save"
              className={`${isPending ? "bg-green-600/40 cursor-not-allowed" : "bg-green-600/80 cursor-pointer"} tracking-wide text-sm  text-green-100 hover:bg-green-600/50 transition-all duration-300 rounded-md px-3 py-1.5`}
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
