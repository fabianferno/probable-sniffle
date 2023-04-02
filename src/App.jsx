import { NavBar } from "./components/NavBar";

import Cook from "./pages/Cook";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

import "./styles/style.scss";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cook" element={<Cook />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
