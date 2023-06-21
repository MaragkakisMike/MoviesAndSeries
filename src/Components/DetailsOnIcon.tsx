const DetailsOnIcon=(props: {iconDetails: any})=>{
    return <span>{props.iconDetails.Title}({props.iconDetails.Year})[{props.iconDetails.imdbRating}]</span>
}

export default DetailsOnIcon;