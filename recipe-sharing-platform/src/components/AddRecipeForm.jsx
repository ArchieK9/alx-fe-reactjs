import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please enter at least 2 ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Build recipe object
      const newRecipe = {
        id: Date.now(), // quick unique id
        title,
        ingredients: ingredients.split("\n"),
        instructions: steps.split("\n"),
      };

      console.log("New Recipe:", newRecipe);

      // Clear form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g., Chocolate Cake"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder={`e.g.,\n2 cups flour\n1 cup sugar`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 h-40 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder={`e.g.,\nMix ingredients\nBake at 180°C for 45 minutes`}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
