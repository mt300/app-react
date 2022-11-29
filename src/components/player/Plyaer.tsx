import Card from "react-bootstrap/Card"
import "./player.css";
import Image from "react-bootstrap/Image";
import {Lane, PlayerProps} from "../../Types";
import pic from "../../assets/player-default.png";

// import "../../assets/player-default.png";

export function Player(props:PlayerProps){
    return(
        <Card className="card-players bg-transparent text-light">
            <Card.Img className="player-image" variant="top" src={pic} />
            <Card.Title className="ms-2 me-auto">{props.name}</Card.Title>
            <Card.Subtitle className="ms-2 me-auto">{props.lane} / {props.id} </Card.Subtitle>
        </Card>
    );
}