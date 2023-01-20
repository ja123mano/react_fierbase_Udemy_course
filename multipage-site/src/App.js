import './App.css'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom"

// page components
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Article from "./Pages/Article"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/articles/:id">
            <Article />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>          
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App
