import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
