import React from "react";
import { Modal, Button } from "react-bootstrap";

function TourDetailModal({ show, handleClose, tour }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Tour</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Nombre del Tour: {tour && tour.nombre}</p>
        <p>Descripción: {tour && tour.descripcion}</p>
        <p>Precio: {tour && tour.precio}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TourDetailModal;
