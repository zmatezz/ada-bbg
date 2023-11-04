import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
