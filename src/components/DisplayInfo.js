import React from "react";
import './DisplayInfo.scss';
// import logo from './../logo.svg';

class DisplayInfo extends React.Component {

    // state = {
    //     isShowListUsers: true,
    // }
    constructor(props) {
        super(props);
        this.state = {
            isShowListUsers: true,
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers,
        })
    }
    render() {
        const { listUsers } = this.props;
        // const listUsers = this.props.listUsers;        
        return (
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowListUsers ? "Hide list users:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age} years old</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo;