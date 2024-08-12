import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSecondayContainerClick = useCallback(() => {
    navigate("/page-4");
  }, [navigate]);

  const onSecondayContainerClick1 = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  const onSecondayClick = useCallback(() => {
    navigate("/page-3");
  }, [navigate]);

  return (
    <div className={`frame-wrapper6 ${className}`}>
      <div className="seconday-parent">
        <div className="seconday6" onClick={onSecondayContainerClick}>
          <div className="vector-frame">
            <img
              className="vector-icon8"
              loading="lazy"
              alt=""
              src="/vector11@2x.png"
            />
          </div>
          <b className="title12">{`Hearing & Speech -Learn ALS`}</b>
        </div>
        <div className="frame-wrapper7">
          <div className="seconday-group">
            <div className="seconday7" onClick={onSecondayContainerClick1}>
              <div className="vector-wrapper1">
                <img
                  className="vector-icon9"
                  loading="lazy"
                  alt=""
                  src="/vector-1@2x.png"
                />
              </div>
              <b className="title13">Autism- Mr. Fox</b>
            </div>
            <button className="seconday8" onClick={onSecondayClick}>
              <div className="vector-wrapper2">
                <img className="vector-icon10" alt="" src="/vector-21@2x.png" />
              </div>
              <b className="title14">{`Physical Disability `}</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
