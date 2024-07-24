import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <button>Add new user</button>
            </div>
            <div>
                Table users
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser;