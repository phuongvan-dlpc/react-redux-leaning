import React, { useState } from "react";

const AddUserInfo = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const handleOnchangeInput = (event) => {
        setName(event.target.value);
    }

    const handleOnchangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age
        });
    }
    return (
        <div>
            My name is {name} and I am {age} years old.
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <label>Your age:</label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => handleOnchangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddUserInfo;