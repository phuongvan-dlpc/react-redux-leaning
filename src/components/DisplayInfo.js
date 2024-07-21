import React, { useState } from "react";
import './DisplayInfo.scss';

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age} years old</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default DisplayInfo;