import { MainNav } from "../../navbar/MainNav/MainNav";
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';

export function Market(){
    return(
        <>
        <MainNav/>
        <h1>Market</h1>
        <Stack gap={3}>
            <Carousel variant="dark">
                <Carousel.Item>

                    <div className="d-block w-100 border">Second item</div>
                    <Carousel.Caption>
                        <h1>Carousel Second item</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    Player
                </Carousel.Item>
            </Carousel>
            <Carousel>
                <div className="bg-light border">First item</div>
            </Carousel>
            <Carousel>
                <div className="bg-light border">Third item</div>
            </Carousel>
            <Carousel>
                <div className="bg-light border">Forth item</div>
            </Carousel>
            <Carousel>
                <div className="bg-light border">Fiveth item</div>
            </Carousel>
            
        </Stack>
        </>
    )
}