import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";
import { TextField, Button, MenuItem, Grid } from "@mui/material";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium"); 
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;

   
    dispatch(addTask({ text: task, priority }));
    setTask(""); 
  };

  return (
    <Grid container columnSpacing={2} rowSpacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="New Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          select
          fullWidth
          label="Priority"
          variant="outlined"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {["High", "Medium", "Low"].map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
}
