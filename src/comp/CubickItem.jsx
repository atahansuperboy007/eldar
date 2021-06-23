function CubickItem (props){
    return(
        <div className="cubick-item">
            <img src={props.data.img}/>
            <h1>{props.data.name}</h1>
            <p>{props.data.desc}</p>
            <h1>{props.data.price}</h1>
        </div>
    )
}

export default CubickItem;