import React, { useEffect, useState } from "react";
import axios from "axios";

interface Recipe {
  id: number;
  name: string;
}

interface RecipeDropdownProps {
  onSelectRecipe: (id: number) => void;
}

const RecipeDropdown: React.FC<RecipeDropdownProps> = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?select=name"
        );
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const recipeId = parseInt(e.target.value);
    setSelectedRecipe(recipeId);
    onSelectRecipe(recipeId);
  };

  return (
    <div className="flex justify-center mt-4">
      <select
        className="block w-full p-3 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:ring-2
         focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out transform hover:shadow-lg hover:border-blue-400"
        onChange={handleSelect}
        value={selectedRecipe ?? ""}
      >
        <option value="" disabled>
          Select a Recipe
        </option>
        {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.id}>
            {recipe.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecipeDropdown;
