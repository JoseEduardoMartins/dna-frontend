import PropTypes from "prop-types";
import style from "./Title.module.css";

const Title = ({ children }) => <h1 className={style.title}>{children}</h1>;

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
