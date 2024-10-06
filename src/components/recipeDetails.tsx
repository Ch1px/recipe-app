import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface RecipeDetailsProps {
  recipeId: number | null;
}

interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
  difficulty: string;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipeId }) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (recipeId) {
      const fetchRecipeDetails = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
          setRecipe(response.data);
        } catch (error) {
          console.error('Error fetching recipe details:', error);
        }
      };
      fetchRecipeDetails();
    }
  }, [recipeId]);

  if (!recipeId) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      {recipe ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.name}</h2>
          <p className="text-gray-600 mb-2"><strong>Difficulty:</strong> {recipe.difficulty}</p>

          <h3 className="font-semibold text-lg text-gray-700 mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg text-gray-700 mb-2">Instructions:</h3>
          <p className="text-gray-600">{recipe.instructions}</p>
        </>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
};

export default RecipeDetails;
