import { MainNav } from "../../navbar/MainNav/MainNav";
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Player } from "../../player/Plyaer";
import { Lane, PlayerProps } from "../../../Types";
import {Chart } from "../../player/Chart";
import { BuyBox } from "../../player/BuyBox";
import "./market.css";




export function Market(){    
    const toplaners:PlayerProps[] = [
        {id:1, name:"Wizer", lane:Lane.TOP},
        {id:2, name:"Robo",  lane:Lane.TOP},
        {id:3, name:"FnB", lane:Lane.TOP}
    ]
    const junglers:PlayerProps[] = [
        {id:4, name:"Wiz", lane:Lane.JG},
        {id:5, name:"Cariok",  lane:Lane.JG},
        {id:6, name:"Ranger", lane:Lane.JG}
    ]
    const midlaners:PlayerProps[] = [
        {id:7, name:"Tinnowns", lane:Lane.MID},
        {id:8, name:"Dynquedo",  lane:Lane.MID},
        {id:9, name:"Jean Mago", lane:Lane.MID}
    ]
    const adcarys:PlayerProps[] = [
        {id:10, name:"Trigo", lane:Lane.ADC},
        {id:11, name:"BrTT",  lane:Lane.ADC},
        {id:12, name:"GsTv", lane:Lane.ADC}
    ]
    const suplaner:PlayerProps[] = [
        {id:13, name:"Damage", lane:Lane.SUP},
        {id:14, name:"Woz",  lane:Lane.SUP},
        {id:15, name:"Ceos", lane:Lane.SUP}
    ]

    return(
        <>
        <MainNav/>
        <Container  id="container">
        <h1>Market</h1>
        <Stack gap={3}>
            <h2>Toplaner</h2>
            <div className="players-div">
            <Carousel variant="dark" className="carousel-players" indicators={false} interval={null}>
                {toplaners.map(item => {
                    return(
                        <Carousel.Item>
                        <Player name={item.name} id={item.id} lane={item.lane} />
                    </Carousel.Item>
                    )
                })}
            </Carousel>
            <Chart/>
            <BuyBox/>
            </div>
            <h2>Jungler</h2>
            <div className="players-div">

            <Carousel variant="dark" className="carousel-players" indicators={false} interval={null}>
                {junglers.map(item => {
                    return(
                        <Carousel.Item>
                        <Player name={item.name} id={item.id} lane={item.lane} />
                    </Carousel.Item>
                    )
                })}
            </Carousel>
            <Chart/>
            <BuyBox/>
            </div>
            <h2>Midlaner</h2>
            <div className="players-div">

            <Carousel variant="dark" className="carousel-players" indicators={false} interval={null}>
                {midlaners.map(item => {
                    return(
                        <Carousel.Item>
                        <Player name={item.name} id={item.id} lane={item.lane} />
                    </Carousel.Item>
                    )
                })}
            </Carousel>
            <Chart/>
            <BuyBox/>
            </div>
            <h2>Adcarry</h2>
            <div className="players-div">

            <Carousel variant="dark" className="carousel-players" indicators={false} interval={null}>
                {adcarys.map(item => {
                    return(
                        <Carousel.Item>
                            <Player name={item.name} id={item.id} lane={item.lane} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Chart/>
            <BuyBox/>
            </div>
            <h2>Support</h2>
            <div className="players-div">

            <Carousel variant="dark" className="carousel-players" indicators={false} interval={null}>
                {suplaner.map(item => {
                    return(
                        <Carousel.Item>
                        <Player name={item.name} id={item.id} lane={item.lane} />
                    </Carousel.Item>
                    )
                })}
            </Carousel>
            <Chart/>            
            <BuyBox/>


            </div>
        </Stack>
        </Container>
        </>
    )
}