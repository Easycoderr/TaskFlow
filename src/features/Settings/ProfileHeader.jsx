function ProfileHeader({ email, name }) {
  const avatarLetter = name.split("")[0];
  return (
    <div className="flex items-center gap-8">
      {/* profile picture */}
      <div className="bg-primary rounded-full w-20 h-20 flex justify-center items-center">
        <span className="font-roba text-5xl">{avatarLetter}</span>
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
  );
}

export default ProfileHeader;
