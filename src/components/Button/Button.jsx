import styles from "./Button.module.scss";

const Button = ({ onClick, data, btnClassName, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${
        btnClassName !== "" ? `btn-${btnClassName}` : ""
      }`}
    >
      {data}
    </button>
  );
};

export default Button;
