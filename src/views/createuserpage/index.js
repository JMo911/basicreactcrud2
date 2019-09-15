import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

class CreateUserPage extends React.Component {
    render() {
        return (
        <div className="CreateUserPage">
        <h1>create user page</h1>
        <form>
            <label for="firstname">first name</label>
            <input type="text" name="firstname"></input>
            <label for="lastname">lastname</label>
            <input type="text" name="lastname"></input>
            <label for="username">username</label>
            <input type="text" name="username"></input>
            <label for="password">password</label>
            <input type="password" name="password"></input>
            {/* CAR INFO */}
            {/* <label for="licenseplate">licenseplate</label>
            <input type="licenseplate" name="licenseplate"></input>
            <label for="carmake">carmake</label>
            <input type="carmake" name="carmake"></input>
            <label for="carmodel">carmodel</label>
            <input type="carmodel" name="carmodel"></input>
            <label for="carcolor">carcolor</label>
            <input type="carcolor" name="carcolor"></input> */}
            <button type='submit' id='registersubmit'>Submit</button>
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