import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <header className="text-white">
        <Container>
          <div className="py-3 d-flex justify-content-between align-items-center">
            <div className="p-3 d-flex justify-content-center align-items-center">
              <img
                src="android-chrome-512x512.png"
                style={{ height: "30px" }}
                alt="logo"
                className="me-2"
              />
              <h2 className="fw-bold text-primary mt-2">
                Cook<span className="text-secondary">GPT</span>
              </h2>
            </div>
            <div className="p-3 pt-4">
              <p className="fw-normal" style={{ color: "gray" }}>
                ChatGPT powered cookbook.
              </p>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
