
export enum Lane {
    TOP="TOP",
    JG="JG",
    MID="MID",
    ADC="ADC",
    SUP="SUP"
}

export type PlayerProps = {
    name: string,
    id: number,
    lane: Lane
}
