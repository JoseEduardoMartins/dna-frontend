import PropTypes from "prop-types";
import style from "./Label.module.css";

const Label = ({ children }) => (
    <label className={style.label}>{children}</label>
);

Label.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Label;
