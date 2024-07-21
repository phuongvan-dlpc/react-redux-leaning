import React from "react";
import './DisplayInfo.scss';
// import logo from './../logo.svg';

// class DisplayInfo extends React.Component {

//     render() {
//         const { listUsers } = this.props;
//         // const listUsers = this.props.listUsers;        
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age} years old</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    return (
        <div className="display-info-container">
            {true &&
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