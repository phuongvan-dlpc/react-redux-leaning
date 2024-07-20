import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Văn Đình Phương", age: 46 },
            { id: 2, name: "Trần Quốc Việt", age: 69 },
            { id: 3, name: "Phan Quốc Huy", age: 16 }
        ]
    }

    handleAddNewUser = (userOb) => {
        this.setState({
            listUsers: [userOb, ...this.state.listUsers]
        });
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone,
        })
    }

    render() {
        //DRY: don't repeat yourself        
        return (
            <>
                <br />
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}

export default MyComponent;