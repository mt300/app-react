
export enum Lane {
    TOP="TOP",
    JG="JG",
    MID="MID",
    ADC="ADC",
    SUP="SUP"
}
export type Stats = {
    kda:number,
    cs:number,
    assists: number,
    grank: number,
    lrank: number,
    lscore: number,
    mscore: number,
    rstat1: number,
    rstat2: number,
    rstat3: number,
    price: number
}

export type PlayerProps = {
    name: string,
    id: number,
    lane: Lane,
    stats:Stats
}
