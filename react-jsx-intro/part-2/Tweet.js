const Tweet = (props) => {
    return (
        <div class="tweet">
            <h3 class="user">{props.user}</h3>
            <p>{props.name}</p>
            <p class="date">{props.date}</p>
            <p>{props.message}</p>
        </div>
    )
}