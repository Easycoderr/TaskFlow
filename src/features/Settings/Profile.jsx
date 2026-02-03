import { BsEye, BsPerson, BsTrash, BsTrash2 } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import Accordion from "../../components/Accordion";
import Input from "../../components/Input";
import { LuLogOut } from "react-icons/lu";
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
                type="settings"
                inputType="password"
                inputName="Password"
                label="Password"
                icon={<BsEye />}
              />
              <Input
                onShowPassword={handleShowPassword}
                type="settings"
                inputType="password"
                inputName="confirmPassword"
                label="Confirm password"
                icon={<BsEye />}
              />
              <Input
                onShowPassword={handleShowPassword}
                type="settings"
                inputType="password"
                inputName="currentPassword"
                label="Current password"
                icon={<BsEye />}
              />
            </div>
          </Accordion>
          {/* save & Cancel */}
          <div className="flex items-center justify-end">
            <div className="flex gap-2 ">
              <button
                onClick={reset}
                type="button"
                aria-label="cancel"
                className="bg-red-600/80 text-red-100 hover:bg-red-600/50 transition-all duration-300 cursor-pointer rounded-md px-3 py-1.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                aria-label="save"
                className="bg-green-600/80 text-green-100 hover:bg-green-600/50 transition-all duration-300 cursor-pointer rounded-md px-3 py-1.5"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* danger zone */}
      <div className="mt-5 flex flex-col gap-2">
        {/* log out */}
        <button
          type="button"
          aria-label="logout account"
          className="flex items-center gap-2 border rounded-md p-3 justify-center border-red-300 bg-red-300/20 dark:text-red-100 text-red-950  cursor-pointer group"
        >
          <span>Logout</span>
          <span>
            <LuLogOut className="group-hover:translate-x-1 transition-all duration-300" />
          </span>
        </button>
        {/* delete account */}
        <button
          type="button"
          aria-label="logout account"
          className="flex items-center gap-2 border rounded-md p-3 justify-center border-red-500 bg-red-500/20 dark:text-red-100 text-red-950  cursor-pointer group"
        >
          <span>Delete Account</span>
          <span>
            <BsTrash className="group-hover:animate-bounce transition-all duration-300" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
