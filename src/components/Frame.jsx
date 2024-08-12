import PropTypes from "prop-types";
import "./Frame.css";

const Frame = ({ className = "", showButton = true }) => {
  return (
    <div className={`frame20 ${className}`}>
      {showButton && (
        <div className="button">
          <button className="seconday1">
            <div className="title7">Communicate using sign language</div>
          </button>
          <button className="seconday2">
            <div className="title8">Show me how to sign</div>
          </button>
        </div>
      )}
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  showButton: PropTypes.bool,
};

export default Frame;
