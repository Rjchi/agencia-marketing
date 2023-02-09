// En app.js manejamos todas las rutas

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import Home from "containers/pages/Home";
import Error404 from "containers/errors/Error404";

function App() {
  return (
    // Provider va a contener nuestro estore

    <Provider store={store}>
      <Router>
        <Routes>
          {/* Con * indicamos que si no existe mostramos a Error404 */}

          <Route path="*" element={<Error404 />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
