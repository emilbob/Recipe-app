import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe"
import "./App.css"

const App = () => {

  const APP_ID = "fcffa6c3"
  const APP_KEY = "5a34f59174131e072c38b662f2934c2d"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes()

  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  

  

  

  return (

    <div className="App">
      <br />
      <form  className="search-form">
        <input className="search-bar" type="text" value={search}  />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
