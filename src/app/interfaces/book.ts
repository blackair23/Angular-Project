import { IUser } from "./user"

export interface IBook {
    price: number,
    startDate: string,
    endDate: string,
    user: IUser,
};