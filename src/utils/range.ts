export function range(size:number, startAt:number = 0):any {
    //@ts-ignore
    return [...Array(size).keys()].map(i => i + startAt);
}