import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Văn Đình Phương", age: 46 },
        { id: 2, name: "Trần Quốc Việt", age: 69 },
        { id: 3, name: "Phan Quốc Huy", age: 16 }
    ])

    const handleAddNewUser = (userOb) => {
        setListUsers([userOb, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone)
    }

    return (
        <>
            <br />
            <AddUserInfo
                handleAddNewUser={handleAddNewUser}
            />
            <br /> <br />
            <DisplayInfo
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
}

export default MyComponent;