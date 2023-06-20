const DataList = (props: { data: any[]; })=>{
    
    return <>
        {props.data.map((d, index)=>
            <img className="Poster" src={d.Poster}></img>
            )}
    </>
}

export default DataList;