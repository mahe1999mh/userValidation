import React, { useState, useEffect } from "react";

const SignIn = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    mobileNumber: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUserData(storedUsers);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, mobileNumber } = loginFormData;

    if (!userData || userData.length === 0) {
      alert("user data is empty");
      return;
    }

    const loginData = userData.filter(
      (item) =>
        item.username === username ||
        (item.mobileNumber === mobileNumber && item.password === password)
    );

    if (loginData.length > 0) {
      console.log(loginData);
      setIsAuthenticated(true);
      alert("Login successful!");
    } else {
      setIsAuthenticated(false);
      alert("Invalid username or password.");
    }
  };

  return (
    <>
      <div>
        <h2>Sign In</h2>
        {isAuthenticated ? (
          <p>Welcome, {loginFormData.username}!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={loginFormData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>mobile No:</label>
              <input
                type="text"
                name="mobileNumber"
                value={loginFormData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </>
  );
};

export default SignIn;
