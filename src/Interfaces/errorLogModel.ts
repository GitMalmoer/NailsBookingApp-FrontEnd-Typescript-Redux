export default interface errorLogModel{
    callsite : string,
    exception: string,
    id: number,
    level: string,
    logged: Date,
    logger:string,
    machineName:string,
    message:string,
}