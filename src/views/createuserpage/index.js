import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class CreateUserPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        //allows us to stop the form submission from refreshing the page
        event.preventDefault();
        const data = this.state;
        console.log("first name: " + data.firstname + "\nlast name: " + data.lastname + "\n username: " + data.username + "\n pass: " + data.password);
    }

    handleInputChange = (event) => {
        event.preventDefault();
        // THE SQUARE BRACES ALLOW US TO DYNAMICALLY SET THE KEY FOR STATE BASED ON THE INPUT'S NAME
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
        <div className="CreateUserPage">
        <h1>create user page</h1>
        <form onSubmit={this.handleSubmit}>
            {/* FIRST NAME */}
            <label for="firstname">first name</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInputChange}></input>
            {/* LAST NAME */}
            <label for="lastname">lastname</label>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleInputChange}></input>
            {/* USERNAME */}
            <label for="username">username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
            {/* PASSWORD */}
            <label for="password" >password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
            {/* CAR INFO */}
            {/* <label for="licenseplate">licenseplate</label>
            <input type="licenseplate" name="licenseplate"></input>
            <label for="carmake">carmake</label>
            <input type="carmake" name="carmake"></input>
            <label for="carmodel">carmodel</label>
            <input type="carmodel" name="carmodel"></input>
            <label for="carcolor">carcolor</label>
            <input type="carcolor" name="carcolor"></input> */}
            <input type="submit" value="Submit" />
        </form>
        <Link to='/login'>
            <li>Login</li>
        </Link>
        <Link to='/'>
            <li>Home page</li>
        </Link>
        </div>
        );
    }
};

export default CreateUserPage;