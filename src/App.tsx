import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import "./App.css";

function App(){
  return  <Router>
    <div className="navBar" id="navBar">
      <input type="text" id="search" name="search" placeholder="Search movies/series.." />
      <div className="d-grid gap-2">
        <Link to="/"><button className="btn" type="button" id="moviesbtn" >MOVIES</button></Link>
        <Link to="/series"><button className="btn" type="button" id="seriesbtn" >SERIES</button></Link>
      </div>
    </div>
    
    <Routes>
      <Route path='/' element={<MoviesPage />} />
      <Route path="/series" element={<SeriesPage />}/>
    </Routes>
    
  </Router>
}

export default App;