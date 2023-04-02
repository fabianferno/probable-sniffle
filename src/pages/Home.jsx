import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Container className="text-center" style={{ marginTop: "-50px" }}>
        <img src="cook.gif" alt="cook" className="col-md-3 col-12" />
        <h1 className="display-1 fw-bold text-primary">
          Cook<span className="text-secondary">GPT</span>
        </h1>
        <p className="lead fw-normal mb-4 text-success">
          Tell AI what you got in your refridergator and she will tell you{" "}
          <br />
          surprise you with amazing recipes with the cuisine of your choice!
        </p>
        <Link to={"/cook"}>
          {" "}
          <Button variant="success" size="lg" className="mt-3 fw-bold  ">
            Start Cooking 🔪
          </Button>
        </Link>
      </Container>
    </div>
  );
}
