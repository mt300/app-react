import Card from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup"

import "./buyBox.css";
import { Stats } from "../../Types";

export function BuyBox(props:{price:number}){
    return(
        <ListGroup className="list-group-buy " variant="flush" >
        <ListGroup.Item className="border-1 bg-transparent">
                <h3>Price ${props.price}</h3>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 mx-auto bg-transparent">
            
                <Button variant="success" size="lg" className="" >Buy</Button>
            
        </ListGroup.Item>
        </ListGroup>
    )
}