import { useState, useEffect} from "react";
import DataList from "./DataList";
import FilterinPaging from "./FilteringPaging";

function MoviesPage(props: { searchParam: string; }){
    const [Movies, setMovies]=useState<any[]>([]);

    const getMoviesRequest =async () => {
        if(props.searchParam===""){return;}
        console.log(props.searchParam);
        const response = await fetch("http://omdbapi.com/?s="+props.searchParam+"&type=movie&apikey=110b0f84");
        const responseJSON = await response.json();
        if(responseJSON.Search)
            setMovies(responseJSON.Search.sort(function(a: { Year: String; }, b: { Year: String; }){
                if(a.Year.toLowerCase()<b.Year.toLowerCase())return 1;
                else if(a.Year.toLowerCase()>b.Year.toLowerCase())return -1;
                else return 0;
            }));
        else return;
    };
    const GetSortedMovies = () => {
        setMovies((sortedmovies)=> [...sortedmovies]);
      }
    
    useEffect(()=>{
        getMoviesRequest();
    }, [props.searchParam])

    return <div className="DataCont">
            <FilterinPaging data={Movies} header="MOVIES" func={GetSortedMovies}></FilterinPaging>
        <div className="container-fluid">
                <DataList data={Movies} />
        </div>
    </div>
}

export default MoviesPage;