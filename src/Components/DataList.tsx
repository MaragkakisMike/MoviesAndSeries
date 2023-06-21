const DataList = (props: { data: any[]; })=>{
    
    return <>
        {props.data.map((d)=><div className="hover">
            <figure><img src={d.Poster} /></figure>
            <div className="middleTxt">
                <div className="text">{d.Title}({d.Year})[{d.imdbRating}]</div>
            </div>
            </div>
            )}
    </>
}

export default DataList;