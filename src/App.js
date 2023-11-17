import "./App.css";
import { Layout } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import { Home } from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (

    <AuthProvider>
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
