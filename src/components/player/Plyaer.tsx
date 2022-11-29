import Card from "react-bootstrap/Card"
import "./player.css";
import Image from "react-bootstrap/Image";
import  Figure  from "react-bootstrap/Figure";
import {Lane, PlayerProps} from "../../Types";
import pic from "../../assets/player-default.png";
import loud from "../../assets/loud.png";
import pain from "../../assets/pain.png";
import furia from "../../assets/furia.png"
// import "../../assets/player-default.png";

export function Player(props:PlayerProps){
    var logos = [pain,loud,furia];
    // if(props.org.name !== "Pain") {
    //         logo = loud;
    //     }
    return(
        <Card className="card-players bg-transparent text-light">
            <Card.Img className="player-image" variant="top" src={pic} />
            <Card.Title className="ms-2 me-auto p-2">{props.name}</Card.Title>
            <Card.Subtitle className="ms-2 me-auto p-1 d-flex align-items-baseline  w-100 justify-content-around ">
                {props.lane} 
                <Figure >
                    <Figure.Image 
                        width={50}
                        src={logos[Math.round(props.id % 3)]}
                    />

                </Figure>  
            </Card.Subtitle>
        </Card>
    );
}