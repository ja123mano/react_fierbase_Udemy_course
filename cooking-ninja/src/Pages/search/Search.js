import { useLocation } from "react-router-dom"
import RecipeList from "../../Components/RecipeList"
import { useFetch } from "../../Hooks/useFetch"
import { useTheme } from "../../Hooks/UseTheme"

// styles
import "./Search.css"

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")
  const { mode } = useTheme()

  const url ="http://localhost:3000/recipes?q=" + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 
        className="page-title"
        style={{color: mode === "dark" ? "#e4e4e4" : ""}}
        >Recipes including "{query}"
        </h2>

      {error && 
      <p
        className="error"
        style={{color: mode === "dark" ? "#e4e4e4" : ""}}
        >{error}
      </p>}

      {isPending &&
      <p
        className="loading"
        style={{color: mode === "dark" ? "#e4e4e4" : ""}}
        >Loading...
      </p>}

      {data && <RecipeList recipes={data} />}
    </div>
  )
}
