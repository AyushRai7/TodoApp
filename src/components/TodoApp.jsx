import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Container, Typography, Paper, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function TodoApp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    dispatch(logout()); 
    navigate("/"); 
  };

  return (
    <Container maxWidth="md" className="mt-5">
      <Paper className="container p-4" style={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1, 
            "@media (max-width: 600px)": {
              top: 4,
              right: 8, 
            },
          }}
        >
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>

        <Typography variant="h4" className="text-primary mb-3 mt-2 text-center">
          📝 Task Manager
        </Typography>
        
        <TaskInput />
        <TaskList />
      </Paper>
    </Container>
  );
}
