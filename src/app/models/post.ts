export interface PostI {
    text?: string,
    user_id: string,
    comment?: PostComment[],
    like?: string[],
    fav?: string[],
    imgs: string[],
    share?: string[],
}
export interface PostComment {
    user_id: string,
    comment: string
    sub_commnet?: PostComment[]
}