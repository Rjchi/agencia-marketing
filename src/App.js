// En app.js manejamos todas las rutas

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Error404 from "containers/errors/Error404";

import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";

function App() {
  return (
    // Provider va a contener nuestro store

    <Provider store={store}>
      <Router>
        <Routes>
          {/* Con * indicamos que si no existe mostramos a Error404 */}

          <Route path="*" element={<Error404 />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/casos" element={<Cases />}></Route>
          <Route path="/servicios" element={<Services />}></Route>
          <Route path="/nosotros" element={<About />}></Route>
          <Route path="/carreras" element={<Careers />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
