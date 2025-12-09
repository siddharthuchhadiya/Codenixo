import "./App.css";
import Smaller from "./Components/Smaller.jsx";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/Routes.js";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Blog from "./Pages/Blog.jsx";

import Webdesigning from "./Pages/Services-Details/Webdesigning.jsx";
import Webdevelopment from "./Pages/Services-Details/Webdevelopment.jsx";
import Mobiledevelopment from "./Pages/Services-Details/Mobiledevelopment.jsx";
import Uiuxdesign from "./Pages/Services-Details/Uiuxdesign.jsx";
import Graphicsdesign from "./Pages/Services-Details/Graphicsdesign.jsx";
import Customdevelopment from "./Pages/Services-Details/Customdevelopment.jsx";
import Wordpressdevelopment from "./Pages/Services-Details/Wordpressdevelopment.jsx";
import Shopifydevelopment from "./Pages/Services-Details/Shopifydevelopment.jsx";

function App() {
  return (
    <>
      <Smaller />
      <main className="min-h-screen bg-black text-white">
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
            <Route path={ROUTES.BLOG} element={<Blog />} />

            <Route
              path={ROUTES.SERVICE_DETAILS.WEBDESIGN}
              element={<Webdesigning />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.WEBDEVELOPMENT}
              element={<Webdevelopment />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.MOBILEDEVELOPMENT}
              element={<Mobiledevelopment />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.UIUX}
              element={<Uiuxdesign />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.GRAPHICS}
              element={<Graphicsdesign />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.CUSTOM}
              element={<Customdevelopment />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.WORDPRESS}
              element={<Wordpressdevelopment />}
            />
            <Route
              path={ROUTES.SERVICE_DETAILS.SHOPIFY}
              element={<Shopifydevelopment />}
            />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
