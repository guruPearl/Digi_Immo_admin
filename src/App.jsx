import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Auth/Login/Loginpage";
import AdminPanel from "./AdminDashboard/AdminPanel"; 

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/adminpanel" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
