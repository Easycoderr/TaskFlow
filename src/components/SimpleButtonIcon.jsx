function SimpleButtonIcon({ children, label, title, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={title}
      type="button"
      className="bg-transparent border-none group cursor-pointer transition-all duration-300"
    >
      {children}
    </button>
  );
}

export default SimpleButtonIcon;
