import React, { useState } from 'react';
import Closed from '../assets/imgs/cls.jpg';
import Open from '../assets/imgs/opn.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Act2 = () => {
    //manage the modal's open/close state
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to toggle the modal
    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    // JSX structure
    return (
        <div className="container">
            <img src={isModalOpen ? Open : Closed} alt={isModalOpen ? 'State B' : 'State A'} className="stimg" />
            <br />
            <Button variant="outline-success" size="lg" onClick={toggleModal} style={{ marginTop: '2%' }}>
                Click
            </Button>

            <Modal show={isModalOpen} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Enter</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Act2;