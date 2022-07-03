import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import Details from "./details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
