import MoviesPage from "./Components/MoviesPage";
import SeriesPage from "./Components/SeriesPage";
import {useState} from "react";
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App(){
  const [searchP, setSearchP]=useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log(searchP);
      setSearchP(event.target.value);
    }
  };

  
  //setSearchP("Harry");

  return  <Router>
    <div className="navBar" id="navBar">
      <input type="text" id="search" name="search" placeholder="Search movies/series.." onKeyDown={handleKeyDown}/>
      <div>
        <Link to="/"><button className="button" type="button" id="moviesbtn" >MOVIES</button></Link>
        <Link to="/series"><button className="button" type="button" id="seriesbtn" >SERIES</button></Link>
      </div>
    </div>
    
    <Routes>
      <Route path='/' element={<MoviesPage searchParam={searchP}/>} />
      <Route path="/series" element={<SeriesPage searchParam={searchP}/>}/>
    </Routes>
    
  </Router>
}

export default App;