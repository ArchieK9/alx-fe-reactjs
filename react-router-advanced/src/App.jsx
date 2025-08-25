import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./components/Profile.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuth } from "./hooks/useAuth";

import "./index.css";


function App() {

  const { login, logout, isAuthenticated } = useAuth();


  return (
    <BrowserRouter>
      <div>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog/1">Blog 1</Link>
        </nav>

        <div style={{ marginBottom: "1rem" }}>
          {isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </div>

        <Routes>
          {/* Basic */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Protected + Nested */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          {/* Dynamic */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
