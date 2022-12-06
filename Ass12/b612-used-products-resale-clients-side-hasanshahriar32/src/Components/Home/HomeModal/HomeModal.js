import { Button, Modal } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import Checkout from "../../Checkout/Checkout";

const HomeModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const onClick = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const [quote, setQuote] = React.useState();
  useEffect(() => {
    // fetch kaniye quote
    fetch(`https://api.kanye.rest/`)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
      });
  }, []);
  return (
    <div>
      <React.Fragment>
        <Button onClick={onClick}>Book Now</Button>
        <Modal show={showModal} onClose={onClose}>
          <Modal.Header>
            {" "}
            <h1>Quote of the day: {quote}</h1>
          </Modal.Header>
          <Modal.Body className="h-[85vh] overflow-scroll">
            <Checkout setShowModal={setShowModal}></Checkout>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default HomeModal;
