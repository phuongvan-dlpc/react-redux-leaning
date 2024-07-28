import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser, getUserPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUsesr] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const LIMIT_USER = 4;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        //fetchListUser();
        fetchListUserPaginate(1);
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res && res.EC === 0) {
            setListUser(res.DT);
        }
    }

    const fetchListUserPaginate = async (page) => {
        let res = await getUserPaginate(page, LIMIT_USER);
        if (res && res.EC === 0) {
            console.log("chect data with paginate: ", res.DT);
            setListUser(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUsesr(true);
        setDataUpdate(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDelete(true);
        setDataDelete(user);
    }

    const resetUpdateData = () => {
        setDataUpdate({});
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus />Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    {/* <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUserPaginate={fetchListUserPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                    fetchListUserPaginate={fetchListUserPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUsesr}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUpdateData={resetUpdateData}
                    fetchListUserPaginate={fetchListUserPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalDeleteUser
                    show={showModalDelete}
                    setShow={setShowModalDelete}
                    dataDelete={dataDelete}
                    fetchListUser={fetchListUser}
                    fetchListUserPaginate={fetchListUserPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default ManageUser;