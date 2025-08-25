import { Routes, Route, Link } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Profile from "./components/Profile.jsx"
import Blog from "./pages/Blog.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import "./index.css"

const isAuthenticated = true;

function App() {

  return (
    <BrowserRouter>
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog 1</Link>
      </nav>

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
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div> 
    </BrowserRouter>
  )
}

export default App;
