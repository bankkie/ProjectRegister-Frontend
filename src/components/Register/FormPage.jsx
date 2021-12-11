import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createUser } from "../../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    password: "",
    email: "",
    redirect: false,
  };
  const [formData, setFormData] = useState(state);
  const onChangeFirstName = (e) => {
    let newObj = { ...formData };
    newObj.firstName = e.target.value;
    setFormData(newObj);
  };
  const onChangeUserName = (e) => {
    let newObj = { ...formData };
    newObj.username = e.target.value;
    setFormData(newObj);
  };
  const onChangeLastName = (e) => {
    let newObj = { ...formData };
    newObj.lastName = e.target.value;
    setFormData(newObj);
  };
  const onChangePhoneNumber = (e) => {
    let newObj = { ...formData };
    newObj.phoneNumber = e.target.value;
    setFormData(newObj);
  };
  const onChangePassword = (e) => {
    let newObj = { ...formData };
    newObj.password = e.target.value;
    setFormData(newObj);
  };
  const onChangeEmail = (e) => {
    let newObj = { ...formData };
    newObj.email = e.target.value;
    setFormData(newObj);
  };
  const saveUser = () => {
    const { firstName, lastName, phoneNumber, username, password, email } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !username ||
      !password ||
      !email
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    if (!checkPhoneNumber(phoneNumber)) {
      alert(
        "Phone Number ไม่ถูกต้อง, กรุณากรอก Phone Number เป็นตัวเลข 10 หลัก"
      );
      return;
    }

    if (!checkEmail(email)) {
      alert("Email ไม่ถูกต้อง");
      return;
    }

    dispatch(
      createUser(firstName, lastName, phoneNumber, username, password, email)
    ).then(() => {
      return navigate(`/`);
    });
  };
  const resetForm = () => {
    setFormData(state);
  };
  function checkPhoneNumber(value) {
    if (!value.match(/\d/g)) {
      return false;
    }
    return value.match(/\d/g).length === 10;
  }

  function checkEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Register
            </Typography>
          </CardContent>
          <CardContent>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="FirstName"
              onChange={onChangeFirstName}
              value={formData.firstName}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="LastName"
              onChange={onChangeLastName}
              value={formData.lastName}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="tel"
              name="PhoneNumber"
              onChange={onChangePhoneNumber}
              value={formData.phoneNumber}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="Email"
              onChange={onChangeEmail}
              value={formData.email}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="Username"
              onChange={onChangeUserName}
              value={formData.username}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="Password"
              onChange={onChangePassword}
              value={formData.password}
            />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={saveUser}>
              Save
            </Button>
            <Button size="small" onClick={resetForm}>
              Reset
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default FormPage;
