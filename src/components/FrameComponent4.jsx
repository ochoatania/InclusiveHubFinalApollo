import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`primary-wrapper ${className}`}>
      <button className="primary">
        <b className="title15">Get Started with Buddy Mr Fox</b>
      </button>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
