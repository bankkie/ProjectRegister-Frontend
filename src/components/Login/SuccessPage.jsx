import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function SuccessPage(props) {
    let navigate = useNavigate();
    const onClickLogout = (e) => {
        return navigate(`/`);
    }

  return (
    <div>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SUCCESS PAGE
            </Typography>
          </CardContent>
          
              <Button size="small" onClick={onClickLogout}>
                Logout
              </Button>
        </Card>
      </Container>
    </div>
  );
}

export default SuccessPage;
