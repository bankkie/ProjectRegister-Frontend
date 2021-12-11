import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "../../actions";

function LoginPage(props) {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(retrieveUsers());
  }, [dispatch]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    const user = users.find( e => e.attributes.Username === username);
    if (!user) {
      alert("ไม่พบ Username");
      return;
    }
    if (user.attributes.Password === password) {
      return navigate(`/success`);
    } else {
      alert("Password ไม่ถูกต้อง");
      return;
    }
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Login Form
            </Typography>
          </CardContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmitLogin}
          >
            <CardContent>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={onChangeUsername}
                value={username}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={onChangePassword}
                value={password}
              />
            </CardContent>
            <CardActions>
              <Button size="small" type="submit">
                Login
              </Button>
              <Link to="/register">
                <Button size="small">Sign Up</Button>
              </Link>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default LoginPage;
