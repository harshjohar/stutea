import React from "react";

export const Login = () => {
  return (
    <div className="my-5">
      <h2>LogIn to world of knowledge :)</h2>
        <form action="nothing.php">
            <div class="form">
                <label for="">Email:</label>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div class="form">
                <label for="">Password:</label>
                <input type="password" placeholder="Enter your password"/>
            </div>
            <button type="button">LogIn</button>
        </form>
    </div>
  );
};

export default Login;