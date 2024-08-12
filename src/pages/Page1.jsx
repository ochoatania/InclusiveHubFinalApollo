import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page-3">
      <div className="frame-wrapper">
        <header className="frame">
          <div className="physical-disability-inspire-container">
            <p className="physical-disability">{`Physical Disability  `}</p>
            <p className="inspire-include-empower">{`Inspire, Include, Empower `}</p>
          </div>
        </header>
      </div>
      <main className="page-3-inner">
        <section className="frame-parent">
          <div className="frame-container">
            <div className="frame1">
              <img
                className="rigemini-fill-icon"
                alt=""
                src="/rigeminifill.svg"
              />
              <div className="type-your-disability-wrapper">
                <div className="type-your-disability">Type your disability</div>
              </div>
            </div>
          </div>
          <div className="frame-group">
            <div className="week-goals-structure-wrapper">
              <div className="week-goals-structure">
                <div className="frame2">
                  <div className="ellipse-parent">
                    <div className="frame-child" />
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </div>
                  <input
                    className="frame-item"
                    placeholder="Week 1 Goals"
                    type="text"
                  />
                </div>
                <div className="frame3">
                  <div className="ellipse-parent">
                    <div className="frame-child" />
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </div>
                  <input
                    className="frame-item"
                    placeholder="Week 2 Goals"
                    type="text"
                  />
                </div>
                <div className="frame4">
                  <div className="frame-div">
                    <div className="ellipse-container">
                      <div className="ellipse-div" />
                      <div className="vector-parent">
                        <img
                          className="vector-icon2"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <img
                          className="vector-icon3"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className="frame-child1"
                    placeholder="Week 3 Goals"
                    type="text"
                  />
                </div>
                <div className="frame5">
                  <div className="ellipse-parent">
                    <img className="ellipse-icon" alt="" src="/ellipse-7.svg" />
                    <img className="vector-icon4" alt="" src="/vector.svg" />
                  </div>
                  <input
                    className="frame-child2"
                    placeholder="Week 4 Goals"
                    type="text"
                  />
                </div>
                <div className="frame-frame">
                  <div className="frame6">
                    <div className="frame7">
                      <div className="frame8">
                        <img
                          className="frame-icon"
                          loading="lazy"
                          alt=""
                          src="/frame.svg"
                        />
                        <div className="gemini-goal-assistant">{`Gemini Goal Assistant  will provide you with weekly and monthly goals based on your disability. `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame9">
              <div className="frame10">
                <div className="placeholder-for-gemini">{`Placeholder for gemini answers `}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="frame11" />
      <img className="component-6-icon" alt="" src="/component-6.svg" />
    </div>
  );
};

export default Page1;
