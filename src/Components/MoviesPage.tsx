import { useState, useEffect} from "react";
import DataList from "./DataList";

function MoviesPage(props: { searchParam: string; }){
    const [Movies, setMovies]=useState([]);

    const getMoviesRequest =async () => {
        if(props.searchParam===""){return;}
        console.log(props.searchParam);
        const response = await fetch("http://omdbapi.com/?s="+props.searchParam+"&type=movie&apikey=33baabbf");
        const responseJSON = await response.json();
        setMovies(responseJSON.Search);
    };

    useEffect(()=>{
        getMoviesRequest();
    }, [props.searchParam])

    return <div className="DataCont">
        <h1 className="header">MOVIES</h1>
        <div className="container-fluid">
                <DataList data={Movies} />
        </div>
    </div>
}

export default MoviesPage;