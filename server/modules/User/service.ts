import {
    IUser, IUserDetail,
    createUser, createUsers,
    createUserById, createUserByEmail
} from "./interface";

import db from "../../models";

class User implements IUser {

    id!: number;
    name!: string;
    email!: string;
    password!: string;

    constructor() { }

    create(user: any) {
        return db.User.create(user);
    }

    async getAllUsers(): Promise<IUser[]> {
        return db.User.findAll({
            order: ['name']
        })
            .then(createUsers);
    }

    async getUserById(id:number):Promise<IUserDetail>{
        return db.User.findOne({
            where: { id }
        })
            .then(createUserById)
    }


    async getUserByEmail(email: string): Promise<IUserDetail> {
        return db.User.findOne({
            where: { email }
        })
            .then(createUserByEmail)
    }


    updateUser(id: number, user: any) {
        return db.User.update(user, {
            where: { id },
            fields: ['name', 'email', 'password']
        });
    }

    deleteUser(id: number) {
        return db.User.destroy({
            where: { id }
        });
    }

}
export default User;