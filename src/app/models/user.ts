export interface User {
    id: string,
    fullname: string,
    email: string,
    dob: string,
    password: string,
    about?: string,
    bio?: string,
    cover_img?: string,
    profile_img?: string,
    friends: string[]
}