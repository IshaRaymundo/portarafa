import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import TourDetailModal from "../componentes/TourDetailModal";

function ToursApi() {
  const [tours, setTours] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8082/obtenerTours")
      .then((response) => {
        setTours(response.data.listatours);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Lista Tours</h1>
      {tours.map((elTour) => (
        <div key={elTour.id}>
          <p>{elTour.nombre}</p>
          <Button
            variant="primary"
            onClick={() => {
              setSelectedTour(elTour);
              setShowModal(true);
            }}
          >
            Ver más
          </Button>
        </div>
      ))}
      <TourDetailModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        tour={selectedTour}
      />
    </>
  );
}

export default ToursApi;
