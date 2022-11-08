/**
 * @description Returns a range of numbers
 * @param size the size of the range 
 * @param startAt the start index of the range
 * @returns a range of numbers
 */
export function range(size:number, startAt:number = 0):any {
    //@ts-ignore
    return [...Array(size).keys()].map(i => i + startAt);
}