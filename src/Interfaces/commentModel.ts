export default interface commentModel{
    id:number,
    applicationUserLastName: string,
    applicationUserName : string,
    applicationUserAvatarUri: string,
    applicationUserId: string,
    commentContent : string,
    createDateTime : Date,
    likes : any[],
    postId: number,
}