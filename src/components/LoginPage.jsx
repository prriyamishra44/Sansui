import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(input);
    setFormErrors(errors);
    setIsSubmit(true);
  
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("user", JSON.stringify(input));
  
      // EmailJS integration
      emailjs.send('service_edq7lkc', 'template_wwog5s7', input,'Qdv3KFmUh04TU4wQx')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
        }, (error) => {
          console.error('Failed to send email:', error);
        });
  
      navigate("./login");
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(input);
    }
  }, [formErrors, input, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "UserName is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.number) {
      errors.number = "Number is required";
    } else if (!/^\d{10}$/.test(values.number)) {
      errors.number = "This is not a valid mobile number!";
    }
    return errors;
  };

  return (
    <div className='addUser'>
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className='addUserForm'>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={input.name}
            onChange={handleChange}
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}

          <label htmlFor="number">Mobile Number:</label>
          <input
            name="number"
            value={input.number}
            onChange={handleChange}
            type="text"
            id="number"
            autoComplete="off"
            placeholder="Enter your Mobile number"
          />
          {formErrors.number && <p className="error">{formErrors.number}</p>}

          <button type="submit" className="btn btn-danger">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;