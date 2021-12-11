import React from "react";
import LoginPage from "./components/Login/LoginPage";
import FormPage from "./components/Register/FormPage";
import SuccessPage from "./components/Login/SuccessPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
          </Route>
          <Route path="/register" element={<FormPage />}>
          </Route>
          <Route path="/success" element={<SuccessPage />}>
          </Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
