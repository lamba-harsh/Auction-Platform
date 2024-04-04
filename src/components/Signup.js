// App.js

import React from 'react';
import './Signup.css';


class SignUpForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login-box">
          <h2>SignUp</h2>
          <form action="#" className='form'>
          <div className="input-box">
              <input type="text" required />
              <label>First Name</label>
            </div>
            <div className="input-box">
              <input type="text" required />
              <label>Last Name</label>
            </div>
            <div className="input-box">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
         
            <button type="submit" className="btn">SignUp</button>
            <div className="signup-link">
              <a href="/signin">SignIn</a>
            </div>
          </form>
        </div>

        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>
    );
  }
}

export default SignUpForm;
