import Card from "react-bootstrap/Card"
import "./player.css";


export function Player(props : PlayerProps){
    type PlayerProps = {
        name: string,
        id: number
    }
    return(
        <Card>
            <Card.Img className="player-image" variant="top" src={"../../imgs/default-player.png"} />
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>Role / {props.id} </Card.Subtitle>
        </Card>
    )
}