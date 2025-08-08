import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl font-bold py-6">
        GitHub User Search App
      </h1>
      <Search />
    </div>
  );
}

export default App;
