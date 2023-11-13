import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index";
import Home from "./pages/Home/index";
import Signup from "./pages/Signup/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
