import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/page-4");
  }, [navigate]);

  return (
    <div className={`frame-wrapper4 ${className}`}>
      <div className="rigemini-fill-parent">
        <img
          className="rigemini-fill-icon2"
          loading="lazy"
          alt=""
          src="/rigeminifill1.svg"
        />
        <div className="gemini-als-assistant-parent">
          <div className="gemini-als-assistant">{`Gemini ALS Assistant `}</div>
          <div className="vector-container">
            <img
              className="vector-icon7"
              loading="lazy"
              alt=""
              src="/vector1.svg"
              onClick={onVectorIconClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
