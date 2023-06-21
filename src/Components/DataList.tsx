import {Link} from "react-router-dom";
import DetailsOnIcon from "./DetailsOnIcon";

const DataList = (props: { data: any[]; })=>{
    
    return <>
        {props.data.map((d)=><div className="hover ">
            <Link to="/detailspage"><figure><img src={d.Poster} /></figure></Link>
            <div className="overlay d-flex align-items-center justify-content-center">
                <DetailsOnIcon iconDetails={d}/>
            </div>
            </div>
            )}
    </>
    
}

export default DataList;