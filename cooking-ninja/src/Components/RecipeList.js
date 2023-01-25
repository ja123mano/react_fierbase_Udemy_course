import { Link } from "react-router-dom"
import { useTheme } from "../Hooks/UseTheme"
import Trashcan from "../Assets/delete-icon.svg"
import { projectFirestore } from "../Firebase/config"

// styles
import "./RecipeList.css"

export default function RecipeList({recipes}) {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div 
              className="error"
              style={{color: mode === "dark" ? "#e4e4e4" : ""}}
              >No recipes to load...
            </div>
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          
          <p>{recipe.cookingTime} to make.</p>
          
          <div>{recipe.method.substring(0, 100)}...</div>
          
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>

          <img
            className="delete"
            src={Trashcan}
            onClick={() => handleClick(recipe.id)}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}
