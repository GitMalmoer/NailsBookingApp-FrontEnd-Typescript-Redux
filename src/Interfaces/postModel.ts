export default interface postModel{
    id:number;
    applicationUserId:string,
    applicationUserLastName : string,
    applicationUserAvatarUri: string,
    applicationUserName: string,
    content: string,
    createDateTime : Date,
    comments: any[],
    likes : any[],
}