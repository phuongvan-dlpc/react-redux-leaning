import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: "Dinh Phương",
        address: "Krong Ana",
        age: 46
    }

    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old.
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnchangeInput(event)}
                    />
                    <label>Your age:</label>
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo;