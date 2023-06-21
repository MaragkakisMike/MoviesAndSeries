const DetailsPage = (props: {ChosenImg: any})=>{
    return <div className="row DetailsContainer">
        <div className="col-md-2">
            <img src={props.ChosenImg.Poster}></img>
        </div>
        <div className="col-md-5">
            <h1>{props.ChosenImg.Title}</h1>
            <div className="row">
                <span>Runtime: {props.ChosenImg.Runtime} | Year of publication: {props.ChosenImg.Year} | Rating: {props.ChosenImg.imdbRating}</span>
            </div>
            <div className="row">
                <span>Plot:</span>
                <p>{props.ChosenImg.Plot}</p><br />
                <span>Genre: {props.ChosenImg.Genre}</span>
                <span>Writer: {props.ChosenImg.Writer}</span>
                <span>Actors: {props.ChosenImg.Actors}</span>

            </div>
        </div>
        
    </div>
}

export default DetailsPage;