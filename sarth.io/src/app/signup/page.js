// Add this line at the top of the page.js file
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importing the useRouter hook
import axios from 'axios'; // Axios for API calls

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the useRouter hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send data to the backend API
      const response = await axios.post('/api/auth/signup', formData);

      // If signup is successful, redirect to home page
      if (response.data.success) {
        router.push('/'); // Redirect to home page
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
