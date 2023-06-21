import { useState, useEffect} from "react";
import DataList from "./DataList";
import FilteringPaging from "./FilteringPaging";

function SeriesPage(props: { searchParam: string; handleImgClick: any}){
    const [Series, setSeries]=useState<any[]>([]);

    const getMoviesRequest =async () => {
        if(props.searchParam===""){return;}
        console.log(props.searchParam);
        const response = await fetch("http://omdbapi.com/?s="+props.searchParam+"&type=series&apikey=110b0f84");
        const responseJSON = await response.json();
        if(responseJSON.Search)
            responseJSON.Search.sort(function(a: { Year: String; }, b: { Year: String; }){
                if(a.Year.toLowerCase()<b.Year.toLowerCase())return 1;
                else if(a.Year.toLowerCase()>b.Year.toLowerCase())return -1;
                else return 0;
            });
        let seriesInfo= [];
        for (var i in responseJSON.Search){
            const response = await fetch("http://omdbapi.com/?i="+responseJSON.Search[i].imdbID+"&plot=full&apikey=110b0f84");
            const responseJSONI = await response.json();
            if(responseJSONI){
                seriesInfo.push(responseJSONI);
            }else break;
        }
        console.log(seriesInfo);
        setSeries(seriesInfo);
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
                <DataList data={Series} handleClick={props.handleImgClick}/>
        </div>
    </div>
}

export default SeriesPage;