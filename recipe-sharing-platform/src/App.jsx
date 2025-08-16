import "./index.css";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="bg-blue-100 min-h-screen w-screen mx-auto">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        Recipe Sharing Platform
      </header>
      <HomePage />
    </div>
  );
}

export default App;

