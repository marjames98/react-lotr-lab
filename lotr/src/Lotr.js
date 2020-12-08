function Lotr(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.title[0]}</h1>
            <p>{props.time[0]}</p>
            <h2>{props.title[1]}</h2>
            <p>{props.time[1]}</p>
            <h3>{props.title[2]}</h3>
            <p>{props.time[2]}</p>
        </div>
    )
}
export default Lotr;