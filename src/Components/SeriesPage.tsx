import { useState, useEffect} from "react";
import DataList from "./DataList";
import FilteringPaging from "./FilteringPaging";

function SeriesPage(props: { searchParam: string; }){
    const [Series, setSeries]=useState([]);

    const getMoviesRequest =async () => {
        if(props.searchParam===""){return;}
        console.log(props.searchParam);
        const response = await fetch("http://omdbapi.com/?s="+props.searchParam+"&type=series&apikey=110b0f84");
        const responseJSON = await response.json();
        if(responseJSON.Search)
            setSeries(responseJSON.Search.sort(function(a: { Year: String; }, b: { Year: String; }){
                if(a.Year.toLowerCase()<b.Year.toLowerCase())return 1;
                else if(a.Year.toLowerCase()>b.Year.toLowerCase())return -1;
                else return 0;
            }));
        else return;
    };

    const GetSortedSeries = () => {
        setSeries((sortedseries)=> [...sortedseries]);
      }
    
    useEffect(()=>{
        getMoviesRequest();
    }, [props.searchParam])

    return <div className="DataCont">
        <FilteringPaging data={Series} header="SERIES" func={GetSortedSeries}></FilteringPaging>
        <div className="container-fluid">
                <DataList data={Series} />
        </div>
    </div>
}

export default SeriesPage;