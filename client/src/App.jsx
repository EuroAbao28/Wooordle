import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Medium from "./pages/Medium";
import Easy from "./pages/Easy";
import Hard from "./pages/Hard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
