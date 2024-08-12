import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Page3 from "./pages/Page3";
import Page1 from "./pages/Page1";
import Page from "./pages/Page";
import Page2 from "./pages/Page2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/page-3":
        title = "";
        metaDescription = "";
        break;
      case "/page-4":
        title = "";
        metaDescription = "";
        break;
      case "/page-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Page3 />} />
      <Route path="/page-3" element={<Page1 />} />
      <Route path="/page-4" element={<Page />} />
      <Route path="/page-2" element={<Page2 />} />
    </Routes>
  );
}
export default App;
