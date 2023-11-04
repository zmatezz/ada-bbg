import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
