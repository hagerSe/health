import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./login";
import Homee from "./homee";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/Homee" element={<Homee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
