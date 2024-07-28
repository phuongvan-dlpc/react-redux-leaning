import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;
    const handleClose = () => setShow(false);

    const handleSubmitDelete = async () => {
        let res = await deleteUser(dataDelete.id);

        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            // await props.fetchListUser();
            props.setCurrentPage(1);
            await props.fetchListUserPaginate(1);
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user? email = <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDeleteUser;