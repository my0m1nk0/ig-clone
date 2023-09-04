import { User } from "./user"

export interface PostI {
    id: string,
    text?: string,
    user_id: string,
    comment?: PostComment[],
    like?: string[],
    fav?: string[],
    imgs: string[],
    share?: string[],
    user?: User,
}
export interface PostComment {
    user_id: string,
    comment: string
    img?: string
    sub_commnet?: PostComment[]
    user?: User
}