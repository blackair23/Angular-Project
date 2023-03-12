import { IBook } from "./book";
import { IComment } from "./comment";
import { IUser } from "./user";

export interface IListing{
    title: string,
    location: string,
    price: number,
    description: string,
    imgFile: string,
    service1: string,
    service2: string,
    service3: string,
    service4: string,
    _ownerId: IUser,
    bookings: IBook,
    bookUserId: string,
    comments: IComment
}