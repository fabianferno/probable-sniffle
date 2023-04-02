import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      backdropClassName="bg-primary"
      variant="dark"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-black" closeButton closeVariant="white">
        <Modal.Title id="contained-modal-title-vcenter">
          Ethereum Name Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-black">
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-black">
        <Button variant="outline-primary">Pledge</Button>
        <Button variant="outline-primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function ProjectModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => setModalShow(true)}
      >
        View and Pledge
      </Button>

      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
