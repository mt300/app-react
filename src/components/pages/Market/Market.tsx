import { MainNav } from "../../navbar/MainNav/MainNav";
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import { Player } from "../../player/Plyaer";
import "./market.css";

export function Market(){    
    return(
        <>
        <MainNav/>
        <h1>Market</h1>
        <Stack gap={3}>
            <h2>Toplaner</h2>

            <Carousel variant="dark" className="carousel-players" interval={null}>
                <Carousel.Item>
                    <Player/>
                </Carousel.Item>
                <Carousel.Item>
                    <Player />
                </Carousel.Item>
            </Carousel>
            <h2>Jungler</h2>
            <Carousel variant="dark" className="carousel-players" interval={null}>
                <Carousel.Item>
                    <Player/>
                </Carousel.Item>
                <Carousel.Item>
                    <Player />
                </Carousel.Item>
            </Carousel>
            <h2>Midlaner</h2>
            <Carousel variant="dark" className="carousel-players" interval={null}>
                <Carousel.Item>
                    <Player/>
                </Carousel.Item>
                <Carousel.Item>
                    <Player />
                </Carousel.Item>
            </Carousel>
            <h2>Adcarry</h2>
            <Carousel variant="dark" className="carousel-players" interval={null}>
                <Carousel.Item>
                    <Player/>
                </Carousel.Item>
                <Carousel.Item>
                    <Player />
                </Carousel.Item>
            </Carousel>
            <h2>Support</h2>
            <Carousel variant="dark" className="carousel-players" interval={null}>
                <Carousel.Item>
                    <Player/>
                </Carousel.Item>
                <Carousel.Item>
                    <Player />
                </Carousel.Item>
            </Carousel>
            
        </Stack>
        </>
    )
}