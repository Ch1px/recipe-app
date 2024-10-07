import React, { useState } from "react";
import RecipeDropdown from "./components/recipeDropdown";
import RecipeDetails from "./components/recipeDetails";

const App: React.FC = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const handleSelectRecipe = (id: number) => {
    setSelectedRecipeId(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Explore Delicious Recipes
        </h1>
        <RecipeDropdown onSelectRecipe={handleSelectRecipe} />
        {selectedRecipeId && <RecipeDetails recipeId={selectedRecipeId} />}
      </div>
    </div>
  );
};

export default App;
