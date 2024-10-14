import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container,
  CssBaseline,
  Box,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ReminderModal from './ReminderModal';
import { useNavigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ToDoList({ onLogout }) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [opened, setOpened] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const taskTitle = useRef('');
  const taskSummary = useRef('');
  const taskDateTime = useRef('');
  const taskPriority = useRef('Medium');

  // Load tasks from local storage or JSON server
  const loadTasks = async () => {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (localStorageTasks.length === 0) {
      // Fetch from JSON server
      const response = await fetch('http://localhost:3001/tasks');
      const tasksFromServer = await response.json();
      localStorage.setItem('tasks', JSON.stringify(tasksFromServer));
      setTasks(tasksFromServer);
    } else {
      setTasks(localStorageTasks);
    }
  };

  // Add a new task
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Send to server
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  // Edit a task
  const editTask = (taskToEdit) => {
    taskTitle.current = { value: taskToEdit.title }; // Initialize ref with an object
    taskSummary.current = { value: taskToEdit.summary };
    taskDateTime.current = { value: taskToEdit.dateTime };
    taskPriority.current.value = taskToEdit.priority; // Directly assign value

    setOpened(true); // Open the task creation modal for editing
    setCurrentTask(taskToEdit);
  };

  // Save edited task
  const saveTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Update on server
    fetch(`http://localhost:3001/tasks/${updatedTask.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTask),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  // Handle task creation and update
  const handleCreateTask = () => {
    const newTask = {
      id: currentTask ? currentTask.id : Date.now(),
      title: taskTitle.current.value,
      summary: taskSummary.current.value,
      dateTime: taskDateTime.current.value,
      priority: taskPriority.current.value,
    };

    if (currentTask) {
      // If editing, save the updated task
      saveTask(newTask);
    } else {
      // If creating a new task
      addTask(newTask);
    }

    setOpened(false);
    setCurrentTask(null);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Remove from server
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: 'DELETE',
    });
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Load tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Reminder checking logic (simplified for illustration)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toISOString().slice(0, 16);
      tasks.forEach((task) => {
        if (task.dateTime === now) {
          setCurrentTask(task);
          setIsReminderOpen(true);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [tasks]);

  // Close reminder modal
  const closeReminderModal = () => {
    setIsReminderOpen(false);
    setCurrentTask(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={onLogout}>Logout</Button>
            <Button color="inherit" onClick={() => navigate('/profile')}>Profile</Button>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" alignItems="center">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
          {opened && (
            <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
              <Typography component="h2" variant="h5">{currentTask ? 'Edit Task' : 'New Task'}</Typography>
              <TextField inputRef={taskTitle} label="Title" fullWidth margin="normal" required />
              <TextField inputRef={taskSummary} label="Summary" fullWidth margin="normal" />
              <TextField inputRef={taskDateTime} label="Date and Time" type="datetime-local" fullWidth margin="normal" required InputLabelProps={{ shrink: true }} />
              <FormControl fullWidth margin="normal">
                <InputLabel>Priority</InputLabel>
                <Select inputRef={taskPriority} label="Priority" defaultValue="Medium">
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="secondary" onClick={() => setOpened(false)}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleCreateTask}>Save Task</Button>
              </Box>
            </Paper>
          )}
          <Box mt={2} width="100%">
            <Typography component="h1" variant="h4" gutterBottom>My Tasks</Typography>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <Paper key={task.id} elevation={3} sx={{ padding: 2, margin: 2 }}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">{task.title}</Typography>
                    <Box>
                      <IconButton onClick={() => editTask(task)} className="edit-button"><EditIcon /></IconButton>
                      <IconButton onClick={() => deleteTask(task.id)}><DeleteIcon /></IconButton>
                    </Box>
                  </Box>
                  <Typography>{task.summary || 'No summary was provided for this task'}</Typography>
                  <Typography>Reminder set for: {task.dateTime}</Typography>
                  <Typography>Priority: {task.priority}</Typography>
                </Paper>
              ))
            ) : (
              <Typography>You have no tasks</Typography>
            )}
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => setOpened(true)}>New Task</Button>
          </Box>
        </Box>
        <ReminderModal isOpen={isReminderOpen} onClose={closeReminderModal} task={currentTask} />
      </Container>
    </ThemeProvider>
  );
}

export default ToDoList;
