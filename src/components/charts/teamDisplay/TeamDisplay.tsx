import { Lane, PlayerProps } from "../../../Types"
import {  Player } from "../../player/Plyaer"
export function TeamDisplay(props:{team:PlayerProps[]}) {
    return(
        <>
        {props.team.map(item =>  
            <Player name={item.name} id={item.id} lane={item.lane}  stats={item.stats} />
        )}
        </>
    )
}