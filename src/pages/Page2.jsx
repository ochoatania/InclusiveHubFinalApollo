import FrameComponent2 from "../components/FrameComponent2";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="page-2">
      <header className="frame14">
        <div className="frame15">
          <div className="frame16">
            <div className="autism-buddy-mrfox-container">
              <p className="autism-buddy-mrfox">{`Autism- Buddy Mr.Fox  `}</p>
              <p className="inspire-include-empower3">
                <span className="inspire-include-empower4">
                  <span>Inspire, Include, Empower</span>
                  <span className="span1">{` `}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="frame-parent2">
        <div className="frame17">
          <div className="rectangle-div" />
        </div>
        <div className="frame-wrapper2">
          <div className="frame18">
            <div className="frame19">
              <div className="seconday">
                <div className="title-wrapper">
                  <div className="title">
                    <p className="buddy-fox">Buddy Fox</p>
                    <p className="your-helpful-companion">
                      Your helpful companion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent2 />
      </section>
      <img className="component-5-icon" alt="" src="/component-5.svg" />
    </div>
  );
};

export default Page2;
