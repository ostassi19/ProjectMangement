import {Component} from "react";
import "./login.css"

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);

        if (!e.target.email.value) {
            alert("Email is required");
        } else if (!e.target.email.value) {
            alert("Valid email is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else if (
            e.target.email.value === "me@example.com" &&
            e.target.password.value === "123456"
        ) {
            alert("Successfully logged in");
            e.target.email.value = "";
            e.target.password.value = "";
        } else {
            alert("Wrong email or password combination");
        }
    };

    handleClick = e => {
        e.preventDefault();

        alert("Goes to registration page");
    };

    render() {
        return (
            <div className="App">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Username</label>
                        <input name="username"  />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className="primary">Login</button>
                </form>
            </div>
        );
    }
}
export default Login;