import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ type, theme, operation, onClick, children }) => (
    <button
        className={`
        ${style.button}
        ${style[operation]}
        ${style[`theme_${theme}`]}
    `}
        {...{ type, onClick: operation === "active" ? onClick : () => {} }}
    >
        {children}
    </button>
);

Button.defaultProps = {
    type: "button",
    theme: "success",
    operation: "active",
};

Button.propTypes = {
    type: PropTypes.oneOf(["button"]),
    theme: PropTypes.oneOf(["success", "delete"]),
    operation: PropTypes.oneOf(["active", "inactive"]),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
