import Card from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup"
import "./buyBox.css";

export function BuyBox(){
    return(
        <ListGroup className="list-group-buy " variant="flush" >
        <ListGroup.Item className="border-1">
                <h3>Price $129.90</h3>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 mx-auto">
            
                <Button variant="success" size="lg" className="" >Buy</Button>
            
        </ListGroup.Item>
        </ListGroup>
    )
}