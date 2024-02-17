const Person = (props) => {
    const nameLength = 6;
    const voteAge = props.age >= 18 ? "Go vote!" : "Go Study!";

    const hobbiesList = props.hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div>
            <h2>{props.name.slice(0, nameLength)}</h2>
            <h3>{props.age}</h3>
            <ul>
                Hobbies:
                {hobbiesList}
            </ul>

            <h3>{voteAge}</h3>
        </div>
    )
}