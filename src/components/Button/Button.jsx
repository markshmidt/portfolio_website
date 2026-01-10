import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  target,
  className = "",
}) => {
  const classes = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
