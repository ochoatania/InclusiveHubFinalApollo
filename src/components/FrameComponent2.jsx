import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`button-grid-wrapper ${className}`}>
      <div className="button-grid">
        <div className="frame21">
          <div className="frame21">
            <div className="button1">
              <div className="seconday3">
                <div className="title9">{`Ask Mr. Fox for help `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper5">
          <div className="frame23">
            <div className="frame21">
              <div className="seconday4">
                <div className="title10">
                  Prompt - Are you feeling sad? Having a hard day?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame21">
          <div className="frame21">
            <div className="button1">
              <div className="seconday5">
                <div className="title11">{`Placeholder for Mr. Fox response `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
