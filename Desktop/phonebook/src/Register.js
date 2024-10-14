import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    gender: '',
    dob: '',
    country: '',
    occupation: '',
    phoneNumber: '',
    email: '',
    interests: '',
    profileImage: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!userData.email.includes('@')) {
      setError('Email must contain @');
      return;
    }

    if (!/^\d{10}$/.test(userData.phoneNumber)) {
      setError('Phone number must be 10 digits');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/users?email=${userData.email}`);
      const existingUsers = await response.json();

      if (existingUsers.length > 0) {
        setError('You already have an account.');
      } else {
        await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      setError('Error adding user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="surname" value={userData.surname} onChange={handleChange} placeholder="Surname" required />
        <input type="text" name="gender" value={userData.gender} onChange={handleChange} placeholder="Gender" required />
        <input type="date" name="dob" value={userData.dob} onChange={handleChange} placeholder="Date of Birth" required />
        <input type="text" name="country" value={userData.country} onChange={handleChange} placeholder="Country" required />
        <input type="text" name="occupation" value={userData.occupation} onChange={handleChange} placeholder="Occupation" required />
        <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="interests" value={userData.interests} onChange={handleChange} placeholder="Interests" required />
        <input type="file" accept="image/*" onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setUserData((prevData) => ({
                ...prevData,
                profileImage: reader.result,
              }));
            };
            reader.readAsDataURL(file);
          }
        }} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
