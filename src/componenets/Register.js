import React from "react";

export const Register = () => {
  return (
    <div>
      <h2>Come! Join StuTea</h2>
      <form action="nothing.php">
        <div class="form">
          <label for="">Name:</label>
          <input type="text" placeholder="Enter your good name" />
        </div>
        <div class="form">
          <label for="">Class:</label>
          <input type="number" placeholder="Enter your class" />
        </div>
        <div class="form">
          <label for="">Age:</label>
          <input type="number" placeholder="Enter your age" />
        </div>
        <div class="form">
          <label for="">Email:</label>
          <input type="email" placeholder="Enter valid email" />
        </div>
        <div class="form">
          <label for="">Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div class="form">
          <label for="">City:</label>
          <input type="password" placeholder="Enter your city name" />
        </div>
        <div class="form">
          <label for="">Contact No:</label>
          <input type="number" placeholder="Enter your contact no" />
        </div>
        <div class="form">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;