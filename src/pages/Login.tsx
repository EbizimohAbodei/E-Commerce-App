import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  
  return (
    <div className="account">
      <form action="">
        <h1>Login</h1>
        <input type="text" name="usetname" placeholder="Username" />
        <input type="password" name="password" id="" placeholder="Password" />

        <button>Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/create-account">create account</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login