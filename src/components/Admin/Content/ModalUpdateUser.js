import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;
    const handleClose = () => {
        setShow(false); //hàm setShow gọi từ parent
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setImage('');
        setPreviewImage('');
        props.resetUpdateData();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            // setImage();
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
        }

        console.log("image", image);
        console.log("image preview", previewImage);
    }

    const validateEmail = (emailInput) => {
        return String(emailInput)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitUpdateUser = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid email !");
            return;
        }

        let res = await putUpdateUser(dataUpdate.id, username, role, image);

        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            // await props.fetchListUser();
            props.setCurrentPage(props.currentPage);
            await props.fetchListUserPaginate(props.currentPage);
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    return (
        <>
            <Modal
                show={show} //Gọi từ parent
                onHide={handleClose}
                size='xl'
                backdrop="static"  //đặt thuộc tính này để click ngoài modal sẽ không bị đóng (Chỉ nhấn x, hoặc Close để đóng)
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                            >
                                <option selected value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUPload'><FcPlus />Upload file image</label>
                            <input
                                type='file'
                                id='labelUPload'
                                onChange={(event) => handleUploadImage(event)}
                                hidden
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => handleSubmitUpdateUser()}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;