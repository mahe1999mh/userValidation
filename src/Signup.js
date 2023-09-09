import React, { useEffect, useState } from "react";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
  });

  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    return storedUsers;
  });
  const [isUsernameUnique, setIsUsernameUnique] = useState(true);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUnique = users.every((user) => user.username !== formData.username);
    if (isUnique) {
      setUsers([...users, formData]);
      setIsUsernameUnique(true);
      alert("User registered successfully...");
    } else {
      setIsUsernameUnique(false);
    }
  };

  return (
    <>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>mobile No:</label>
            <input
              type="text"
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            {!isUsernameUnique && (
              <p className="error">Username must be unique.</p>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register User</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
