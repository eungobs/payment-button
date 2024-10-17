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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email format
    if (!userData.email.includes('@')) {
      setError('Email must contain @');
      return;
    }

    // Validate phone number length
    if (!/^\d{10}$/.test(userData.phoneNumber)) {
      setError('Phone number must be 10 digits');
      return;
    }

    setLoading(true);

    try {
      // Check if user already exists on the server by email
      const response = await fetch(`http://localhost:3001/users?email=${userData.email}`);
      
      if (!response.ok) throw new Error('Server not responding');
      
      const existingUsers = await response.json();

      if (existingUsers.length > 0) {
        setError('You already have an account.');
      } else {
        // Register new user on the server
        await saveUserOnServer(userData);
      }
    } catch (error) {
      console.warn('Server error, falling back to localStorage:', error);

      // If the server request fails, check localStorage for existing users
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingLocalUser = users.find((user) => user.email === userData.email);

      if (existingLocalUser) {
        setError('You already have an account.');
      } else {
        // Register new user in localStorage
        saveUserLocally(userData);
      }
    } finally {
      setLoading(false);
    }
  };

  // Save user data to JSON Server
  const saveUserOnServer = async (userData) => {
    try {
      const registerResponse = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!registerResponse.ok) throw new Error('Failed to save on server.');

      // Save user data in localStorage as a backup after server registration
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('users', JSON.stringify([...getUsersFromLocalStorage(), userData]));
      
      navigate('/login');
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  // Save user data to localStorage
  const saveUserLocally = (userData) => {
    const users = getUsersFromLocalStorage();
    users.push(userData);

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Navigate to login after saving in localStorage
    navigate('/login');
  };

  // Get users from localStorage
  const getUsersFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
  };

  return (
    <div className="register-container">
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="surname"
          value={userData.surname}
          onChange={handleChange}
          placeholder="Surname"
          required
        />
        <input
          type="text"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        <input
          type="date"
          name="dob"
          value={userData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="text"
          name="country"
          value={userData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="text"
          name="occupation"
          value={userData.occupation}
          onChange={handleChange}
          placeholder="Occupation"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="interests"
          value={userData.interests}
          onChange={handleChange}
          placeholder="Interests"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
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
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
