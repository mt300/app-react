type TweetProps ={
    text: string;
}

export function Tweet(props: TweetProps){
    return(
        <>
            <h1>{props.text}</h1>    
        </>
    );
}