import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import "./Page3.css";

const Page3 = () => {
  const navigate = useNavigate();

  const onRowContainerClick = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    // Please sync "Page 5" to the project
  }, []);

  return (
    <div className="page-1">
      <div className="rectangle-parent">
        <header className="rectangle-header" />
        <div className="inclusivehub-inspire-include-container">
          <p className="inclusivehub">{`InclusiveHub  `}</p>
          <p className="inspire-include-empower5">
            <span className="inspire-include-empower6">
              <span>Inspire, Include, Empower</span>
              <span className="span2">{` `}</span>
            </span>
          </p>
        </div>
      </div>
      <main className="page-1-inner">
        <section className="frame-parent3">
          <FrameComponent />
          <div className="frame-parent4">
            <div className="frame-wrapper3">
              <div className="title-row-parent">
                <div className="title-row">
                  <div className="title1">Featured Products</div>
                </div>
                <div className="row" onClick={onRowContainerClick}>
                  <div className="card">
                    <FrameComponent4 />
                    <div className="text-content">
                      <div className="title2">Ask Buddy llama for help</div>
                      <div className="text-content-inner">
                        <div className="subtitle-wrapper">
                          <div className="subtitle">
                            Autism Spectrum Assistant
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <b>Gemini Assistant</b>
                        <span className="span3">{`  `}</span>
                      </div>
                    </div>
                    <div className="vector-wrapper">
                      <img
                        className="vector-icon5"
                        loading="lazy"
                        alt=""
                        src="/vector-3@2x.png"
                      />
                    </div>
                    <div className="rigemini-fill" />
                  </div>
                </div>
              </div>
            </div>
            <div className="list" onClick={onListContainerClick}>
              <div className="text1">
                <div className="title3">Coming Soon!</div>
              </div>
              <div className="list1">
                <div className="section-title">
                  <div className="title-parent">
                    <div className="title4">
                      Social Feed Latest Blogs, News, Events
                    </div>
                  </div>
                </div>
                <div className="row1">
                  <div className="post">
                    <div className="user">
                      <div className="avatar">
                        <img
                          className="vector-icon6"
                          loading="lazy"
                          alt=""
                          src="/vector-4@2x.png"
                        />
                        <div className="title-parent">
                          <div className="title5">Taniasamputeelife</div>
                          <div className="subtitle1">{`2h ago - Atlanta `}</div>
                        </div>
                      </div>
                      <div className="icon-buttons">
                        <div className="icon">•••</div>
                      </div>
                    </div>
                    <div className="text-content1">
                      <div className="title6">
                        Connect with others like you. A space created just for
                        us.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="list-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2@2x.png"
                />
              </div>
              <img
                className="component-5-icon1"
                alt=""
                src="/component-51.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page3;
