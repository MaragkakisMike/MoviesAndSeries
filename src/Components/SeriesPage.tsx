import { useState, useEffect} from "react";
import DataList from "./DataList";
function SeriesPage(props: { searchParam: string; }){
    const [Series, setSeries]=useState([]);

    const getMoviesRequest =async () => {
        if(props.searchParam===""){return;}
        console.log(props.searchParam);
        const response = await fetch("http://omdbapi.com/?s="+props.searchParam+"&type=series&apikey=33baabbf");
        const responseJSON = await response.json();
        if(responseJSON.Search)
            setSeries(responseJSON.Search);
        else return;
    };

    useEffect(()=>{
        getMoviesRequest();
    }, [props.searchParam])

    return <div className="DataCont">
        <h1 className="header">MOVIES</h1>
        <div className="container-fluid">
                <DataList data={Series} />
        </div>
    </div>
}

export default SeriesPage;