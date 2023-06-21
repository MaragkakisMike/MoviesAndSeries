import {Link} from "react-router-dom";
import DetailsOnIcon from "./DetailsOnIcon";


const DataList = (props: { data: any[]; handleClick: any})=>{
    var Id=0;
    const clicked = (e: any)=>{
        props.handleClick(props.data[e.id])
    }
    return <>
        {props.data.map((d)=><div className="hover ">
            <Link to="/detailspage"><figure><img id={Id.toString()} src={d.Poster} onClick={(e)=>clicked(e.currentTarget)}/></figure></Link>
            <div className="overlay d-flex align-items-center justify-content-center">
                <DetailsOnIcon iconDetails={d}/>
            </div>
            {Id+=1}
            </div>
            )}
        
    </>
    
}

export default DataList;