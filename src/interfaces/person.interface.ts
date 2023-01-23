import {ISocial} from "./social.interface";

export interface IPerson {
    personName: string,
    personPosition: string,
    phone: string,
    city: string,
    email: string,
    socialLinks: ISocial
}