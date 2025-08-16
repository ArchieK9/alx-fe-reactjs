import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
    <div className="bg-blue-100 min-h-screen w-screen mx-auto">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        Recipe Sharing Platform
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
