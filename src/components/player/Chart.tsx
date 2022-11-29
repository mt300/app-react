import  ListGroup from "react-bootstrap/ListGroup";
import  Badge  from "react-bootstrap/Badge";
import { PlayerProps, Lane } from "../../Types";
import Card from "react-bootstrap/Card";
import "./chart.css";
import  Button  from "react-bootstrap/Button";

export function Chart() {
    return(
        <ListGroup horizontal >
        <ListGroup.Item className="border-0">
            <ListGroup className="list-group" variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Kda Ratio: 2.5
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    CS/Min : 4.6
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Kill Assit : 53%
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Global Rank : 3rd
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Lane Rank : 1st
                    <Badge bg="danger" pill>1th</Badge>
                </ListGroup.Item>
            </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
            <ListGroup variant="flush" className="list-group">
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Last Score: 183pts
                    <Badge bg="secondary" pill>3rd</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Mean Score: 175pts
                    <Badge bg="danger" pill>1th</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Random Stat One: 1290
                    <Badge bg="warning" pill>2nd</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Random Stat Two: 9.90
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                    Random Stat Three: 13
                </ListGroup.Item>
            </ListGroup>    
        </ListGroup.Item>    
        </ListGroup>
    );
}