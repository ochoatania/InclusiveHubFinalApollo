import FrameComponent3 from "./FrameComponent3";
import Frame from "./Frame";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`page-4-inner ${className}`}>
      <div className="frame-parent5">
        <FrameComponent3 />
        <Frame showButton />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
