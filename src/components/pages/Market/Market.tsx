import { useState } from 'react';
import { MainNav } from "../../navbar/MainNav/MainNav";
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Player } from "../../player/Plyaer";
import { Lane, PlayerProps } from "../../../Types";
import {Chart } from "../../charts/playerChart/Chart";
import { BuyBox } from "../../charts/buyBox/BuyBox";
import { PlayerCarousel } from '../../charts/playerCarousel/PlayerCarousel';
import "./market.css";




export function Market(){    
    const [top,setTop] = useState(0);
    const [mid,setMid] = useState(0);
    const [jg,setJg] = useState(0);
    const [adc,setAdc] = useState(0);
    const [sup,setSup] = useState(0);

    // const orgs:Org[] = [
    //     {
            
    //     },
    //     {
    //         name: "Loud"
    //     }
    // ]

    const toplaners:PlayerProps[] = [
        {id:0, name:"Wizer", lane:Lane.TOP,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 21.90
        }},
        {id:1, name:"Robo",  lane:Lane.TOP,  stats:{
            kda: 5.5, cs: 9.5, assists: 0.93, grank: 1,
            lrank: 1, lscore: 203, mscore: 185, rstat1: 18,
            rstat2: 12, rstat3: 86, price: 13.90
        }},
        {id:2, name:"FnB", lane:Lane.TOP, stats:{
            kda: 1.5, cs: 3.8, assists: 0.23, grank: 5,
            lrank: 3, lscore: 143, mscore: 155, rstat1: 11,
            rstat2: 32, rstat3: 59, price: 3.8
        }}
    ]
    const junglers:PlayerProps[] = [
        {id:0, name:"Wiz", lane:Lane.JG, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 4.90
        }},
        {id:1, name:"Cariok",  lane:Lane.JG, stats:{
            kda: 4.5, cs: 6.8, assists: 0.53, grank: 13,
            lrank: 6, lscore: 183, mscore: 175, rstat1: 8,
            rstat2: 12, rstat3: 89, price: 10.90
        }},
        {id:2, name:"Ranger", lane:Lane.JG,  stats:{
            kda: 1.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 9.90
        }}
    ]
    const midlaners:PlayerProps[] = [
        {id:0, name:"Tinnowns", lane:Lane.MID, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 14.90
        }},
        {id:1, name:"Dynquedo",  lane:Lane.MID, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 23.90
        }},
        {id:2, name:"Jean Mago", lane:Lane.MID,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 32.90
        }}
    ]
    const adcarys:PlayerProps[] = [
        {id:0, name:"Trigo", lane:Lane.ADC,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 13.90
        }},
        {id:1, name:"BrTT",  lane:Lane.ADC,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 24.90
        }},
        {id:2, name:"GsTv", lane:Lane.ADC, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 3.90
        }}
    ]
    const suplaner:PlayerProps[] = [
        {id:0, name:"Damage", lane:Lane.SUP, stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 13.90
        }},
        {id:1, name:"Woz",  lane:Lane.SUP,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 13.90
        }},
        {id:2, name:"Ceos", lane:Lane.SUP,  stats:{
            kda: 2.5, cs: 6.8, assists: 0.53, grank: 3,
            lrank: 1, lscore: 183, mscore: 175, rstat1: 18,
            rstat2: 12, rstat3: 89, price: 13.90
        }}
    ]

    return(
        <div id='outside-container'>
        <MainNav/>
        <Container  id="container">
        <h1>Market</h1>
        <hr />
        <Stack gap={3}>
            <h2>Toplaner</h2>
            <div className="players-div">
           
            <PlayerCarousel players={toplaners} func={setTop} />
            <Chart player={toplaners[top]}/>
            <BuyBox price={toplaners[top].stats.price} />
            </div>
            <hr />

            <h2>Jungler</h2>
            <div className="players-div">

            <PlayerCarousel players={junglers} func={setJg} />
            <Chart player={junglers[jg]} />
            <BuyBox price={junglers[jg].stats.price}/>
            </div>
            <hr />

            <h2>Midlaner</h2>
            <div className="players-div">

            <PlayerCarousel players={midlaners} func={setMid} />
            <Chart player={midlaners[mid]} />
            <BuyBox price={midlaners[mid].stats.price} />
            </div>
            <hr />

            <h2>Adcarry</h2>
            <div className="players-div">

            <PlayerCarousel players={adcarys} func={setAdc} />
            <Chart player={adcarys[adc]} />
            <BuyBox price={adcarys[adc].stats.price} />
            </div>
            <hr />
            <h2>Support</h2>
            <div className="players-div">

            <PlayerCarousel players={suplaner} func={setSup} />
            <Chart player={suplaner[sup]} />            
            <BuyBox price={suplaner[sup].stats.price} />
            </div>
            <hr /><hr /><hr />
        </Stack>
        </Container>
        </div>
    )
}