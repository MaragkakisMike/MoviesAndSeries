function FilteringPaging (props: any){
    function handleClickYear(){
        console.log(props.data);
        props.data.sort(function(a: { Year: String; }, b: { Year: String; }){
            if(a.Year.toLowerCase()<b.Year.toLowerCase())return -1;
            else if(a.Year.toLowerCase()>b.Year.toLowerCase())return 1;
            else return 0;
        });
        props.func(props.data);
    }

    function handleClickAlph(){
        console.log(props.data);
        props.data.sort(function(a: { Title: String; }, b: { Title: String; }){
            if(a.Title.toLowerCase()<b.Title.toLowerCase())return -1;
            else if(a.Title.toLowerCase()>b.Title.toLowerCase())return 1;
            else return 0;
        });
        props.func(props.data);
    }

    async function handleClickRating(){
        props.data.sort(function(a: { imdbRating: number; }, b: { imdbRating: number; }){
            if(a.imdbRating<b.imdbRating)return 1;
            else if(a.imdbRating>b.imdbRating)return -1;
            else return 0;});

        props.func(props.data);
    }

    return <div className="Container">
            <h1 className="header">{props.header}</h1>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <p >Pick sorting method</p>
                <button type="button" className="btn btn-outline-light" onClick={handleClickYear}>Year</button>
                <button type="button" className="btn btn-outline-light" onClick={handleClickAlph}>Alphabetically</button>
                <button type="button" className="btn btn-outline-light" onClick={handleClickRating}>Rating</button>
            </div>
        </div>
}

export default FilteringPaging;