import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Form from "./component/Form";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
