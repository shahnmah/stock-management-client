import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ManageItem = ({ buses }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { model, img, dis, price, quantity, suppler } = buses;
    return (

        <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-4 gy-4'>
            <div className='border rounded '>
                <img className='img-fluid' src={img} alt="" />
                <div className='p-2'>
                    <h5 className='py-1'>Model: {model}</h5>
                    <p>{dis}</p>
                    <h6>Price: {price} $</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Suppler Name: {suppler}</h6>
                    <button onClick={handleShow} className='btn btn-primary px-4 my-2'>Delete</button>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </div>

    );
};

export default ManageItem;