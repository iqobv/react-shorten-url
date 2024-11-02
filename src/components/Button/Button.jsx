import styles from "./Button.module.scss";

const Button = ({ data, btnClassName }) => {
  return (
    <button
      className={`${styles.btn} ${
        btnClassName !== "" ? `btn-${btnClassName}` : ""
      }`}
    >
      {data}
    </button>
  );
};

export default Button;
