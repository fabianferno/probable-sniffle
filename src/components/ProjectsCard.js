import Card from "react-bootstrap/Card";
import { ProjectModal } from "../components/ProjectModal";

export function ProjectCard() {
  return (
    <div className="col-md-3 my-4">
      <Card
        className="border-primary"
        bg="black"
        text="light"
        style={{ width: "18rem" }}
      >
        {/* <Card.Img
          variant="top"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        /> */}
        <Card.Body>
          <h6 className="fw-bold text-white">Ethereum Name Service</h6>
          <Card.Text className="fw-light">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>

          <ProjectModal />
        </Card.Body>
      </Card>
    </div>
  );
}
