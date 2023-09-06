import React, { useEffect, useState } from "react";
const SignUp = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [isUsernameUnique, setIsUsernameUnique] = useState(true);

  useEffect(() => {
    setUserData(users);
    console.log(users);
  }, [users, setUserData]);

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
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {!isUsernameUnique && (
              <p className="error">Username is not unique.</p>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
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
