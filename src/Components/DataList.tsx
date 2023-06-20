const DataList = (props: { data: any[]; })=>{
    
    return <>
        {props.data.map((d, index)=><div className="hover">
            <figure><img src={d.Poster} onClick={()=>{return console.log(d.Title);}} /></figure>
            <div className="middleTxt">
                <div className="text">{d.Title}</div>
            </div>
            </div>
            )}
    </>
}

export default DataList;