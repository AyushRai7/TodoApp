import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Container, Typography } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      console.log("Redirecting to /todo...");
      navigate("/todo");
    }
  }, [user, navigate]);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
    } else {
      alert("Please enter a username!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
