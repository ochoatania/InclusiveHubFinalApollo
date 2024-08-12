import FrameComponent1 from "../components/FrameComponent1";
import "./Page.css";

const Page = () => {
  return (
    <div className="page-4">
      <header className="frame12">
        <div className="hearing-speech-container">
          <p className="hearing-speech">{`Hearing & Speech - ALS Translations   `}</p>
          <p className="inspire-include-empower1">
            <span className="inspire-include-empower2">
              <span>Inspire, Include, Empower</span>
              <span className="span">{` `}</span>
            </span>
          </p>
        </div>
      </header>
      <FrameComponent1 />
      <section className="frame-section">
        <div className="frame13">
          <div className="placeholder-for-gemini1">{`Placeholder for gemini answers `}</div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent1">
            <div className="rigemini-fill-wrapper">
              <img
                className="rigemini-fill-icon1"
                loading="lazy"
                alt=""
                src="/rigeminifill1.svg"
              />
            </div>
            <div className="coming-soon-als-translator-wit-wrapper">
              <div className="coming-soon-als-container">
                <p className="coming-soon">{`Coming Soon `}</p>
                <p className="coming-soon">{`ALS Translator with Gemini `}</p>
              </div>
            </div>
          </div>
        </div>
        <img className="component-6-icon1" alt="" src="/component-61.svg" />
      </section>
    </div>
  );
};

export default Page;
