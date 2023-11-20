import "./App.css";
import { Layout } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import { Home } from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
