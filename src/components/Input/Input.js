import PropTypes from "prop-types";
import style from "./Input.module.css";

const Input = ({ type, value, onChange, ...rest }) => (
    <input className={style.input} {...{ type, value, onChange, ...rest }} />
);

Input.defaultProps = {
    type: "text",
    value: "",
};

Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "tel"]),
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
