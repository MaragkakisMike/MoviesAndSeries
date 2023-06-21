function FilteringPaging (props: any){
    function handleClick1(){
        props.data.sort(function(a: { Year: String; }, b: { Year: String; }){
            if(a.Year.toLowerCase()<b.Year.toLowerCase())return 1;
            else if(a.Year.toLowerCase()>b.Year.toLowerCase())return -1;
            else return 0;
        });
        props.func(props.data);
    }
    function handleClick2(){
        props.data.sort(function(a: { Title: String; }, b: { Title: String; }){
            if(a.Title.toLowerCase()<b.Title.toLowerCase())return -1;
            else if(a.Title.toLowerCase()>b.Title.toLowerCase())return 1;
            else return 0;
        });
        props.func(props.data);
    }
    function handleClick3(){
        
    }
    return <div className="Container">
            <h1 className="header">{props.header}</h1>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <p >Pick sorting method</p>
                <button type="button" className="btn btn-outline-light" onClick={handleClick1}>Year</button>
                <button type="button" className="btn btn-outline-light" onClick={handleClick2}>Alphabetically</button>
                <button type="button" className="btn btn-outline-light" onClick={handleClick3}>Rating</button>
            </div>
        </div>
}

export default FilteringPaging;