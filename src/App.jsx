import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
import Plans from "./pages/Plans/Plans";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/plans" element={<Plans/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
