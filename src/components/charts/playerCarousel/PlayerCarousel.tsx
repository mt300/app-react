import { PlayerProps } from "../../../Types"
import { Player } from "../../player/Plyaer";
import Carousel from "react-bootstrap/Carousel";
// import { useState } from "react";


export function PlayerCarousel(props:{players:PlayerProps[], func: Function}){
    return(

        <Carousel onSelect={(key,event)=>{props.func(key)}} variant="dark" className="carousel-players" indicators={false} interval={null}>
        {props.players.map(item => {
            return(
                <Carousel.Item key={item.id}>
                <Player name={item.name} id={item.id} lane={item.lane}  stats={item.stats} />
            </Carousel.Item>
            )
        })}
    </Carousel>
    );
}