// src/EditUser.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Fetch the user details from the server
    fetch(`http://localhost:3001/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(() => navigate('/users'))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Edit User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            name="phone"
            label="Phone"
            value={user.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default EditUser;
