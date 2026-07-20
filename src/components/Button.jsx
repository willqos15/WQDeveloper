export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {

    const variants = {
    primary: "bg-(--primary) text-(--background) hover:opacity-85",
    outline: "bg-transparent border-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-(--background) transition-colors ",
    ghost: "bg-transparent text-(--primary)",
  };

  return (
    <button
      className={`p-2 rounded-md font-bold cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}