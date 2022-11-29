import  ListGroup from "react-bootstrap/ListGroup";
import  Badge  from "react-bootstrap/Badge";
import { PlayerProps, Lane, Stats } from "../../../Types";
import Card from "react-bootstrap/Card";
import "./chart.css";
import  Button  from "react-bootstrap/Button";

export function Chart(props:{player:PlayerProps}) {
    var stats:Stats = props.player.stats;
    return(
        <ListGroup horizontal >
        <ListGroup.Item className="border-0 bg-transparent ">
            <ListGroup className="list-group " variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Kda Ratio: {stats.kda}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    CS/Min : {stats.cs}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Kill Assit : {stats.assists}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Global Rank : {stats.grank}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Lane Rank : {stats.lrank}
                    <Badge bg="danger" pill>1th</Badge>
                </ListGroup.Item>
            </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 bg-transparent ">
            <ListGroup variant="flush" className="list-group">
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Last Score: {stats.lscore}
                    <Badge bg="secondary" pill>3rd</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Mean Score: {stats.mscore}
                    <Badge bg="danger" pill>1th</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Random Stat One: {stats.rstat1}
                    <Badge bg="warning" pill>2nd</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Random Stat Two: {stats.rstat2}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent text-light">
                    Random Stat Three: {stats.rstat3}
                </ListGroup.Item>
            </ListGroup>    
        </ListGroup.Item>    
        </ListGroup>
    );
}