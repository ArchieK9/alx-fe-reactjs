import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Destructure the values from formData
  const { username, email, password } = formData;

  const [error, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  if (!username) newErrors.username = "Username is required";
  if (!email) newErrors.email = "Email is required";
  if (!password) newErrors.password = "Password is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  console.log("Form Submitted:", formData);
  setFormData({ username: "", email: "", password: "" });
  setErrors({});
};


  return (
    <div>
      <form onSubmit={handleSubmit}>


        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
