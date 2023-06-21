const DataList = (props: { data: any[]; })=>{
    
    return <>
        {props.data.map((d)=><div className="hover">
            <figure><img src={d.Poster} onClick={()=>{return console.log(d.Title);}} /></figure>
            <div className="middleTxt">
                <div className="text">{d.Title}({d.Year})</div>
            </div>
            </div>
            )}
    </>
}

export default DataList;