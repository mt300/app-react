import { useState } from "react";
import { MainNav } from "../../navbar/MainNav/MainNav";
import  Container  from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { TeamDisplay } from "../../charts/teamDisplay/TeamDisplay";
import "./team.css";
import { Lane, PlayerProps } from "../../../Types";


export function Team(){
    
    const Data:PlayerProps[] = [
        {id:0, name:"Wizer", lane:Lane.TOP,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 21.90
        }},
        {id:1, name:"Cariok",  lane:Lane.JG, stats:{
            kda: 4.5, cs: 6.8, assists: 0.53, grank: 13,
            lrank: 6, lscore: 183, mscore: 175, rstat1: 8,
            rstat2: 12, rstat3: 89, price: 10.90
        }},
        {id:0, name:"Tinnowns", lane:Lane.MID, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 14.90
        }},
        {id:0, name:"Trigo", lane:Lane.ADC,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 13.90
        }},
        {id:0, name:"Damage", lane:Lane.SUP, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 13.90
        }}

    ]
    const [team, setTeam] = useState(Data);

    return(
        <div id="outside-container">
        <MainNav/>
        <Container>
        <h1>Team</h1>
        <hr />
        <Stack gap={3}>
        <div className="players-div">
        <TeamDisplay team={team} />
        </div>
        <div className="players-div">
            <h1>Score </h1>
        </div>
        <div className="players-div">
            <h1>History/Highlights </h1>
        </div>
        <hr />
        </Stack>
        </Container>
        </div>
    )
}