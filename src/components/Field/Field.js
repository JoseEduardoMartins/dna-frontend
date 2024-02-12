import PropTypes from "prop-types";
import style from "./Field.module.css";

const Field = ({ flexDirection, children }) => (
    <div
        className={`
            ${style.field}
            ${style[flexDirection]}
        `}
    >
        {children}
    </div>
);

Field.defaultProps = {
    flexDirection: "row",
};

Field.propTypes = {
    flexDirection: PropTypes.oneOf(["row", "column"]),
    children: PropTypes.node.isRequired,
};

export default Field;
