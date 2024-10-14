// src/UserList.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Box, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const deleteUser = (userId) => {
    fetch(`http://localhost:3001/users/${userId}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user.id !== userId)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" component="h1">
            User List
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/register')}>
            Add User
          </Button>
        </Box>
        <List>
          {users.length > 0 ? (
            users.map(user => (
              <ListItem key={user.id} secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" onClick={() => navigate(`/edit-user/${user.id}`)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }>
                <ListItemText 
                  primary={`${user.name}`} 
                  secondary={`Email: ${user.email}, Phone: ${user.phone}`} 
                />
              </ListItem>
            ))
          ) : (
            <Typography>No users found</Typography>
          )}
        </List>
      </Paper>
    </Container>
  );
}

export default UserList;
