import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export function MainNav(){
    const [open, setOpen] = useState(false);

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">KartholaGG</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/market">Market</Nav.Link>
                    <Nav.Link href="/team">Team</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}