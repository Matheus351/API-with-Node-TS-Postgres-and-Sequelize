import { expect } from "./config/helper";
import User from "../../server/modules/User/service";


describe('Unit tests for Controller',()=>{



    describe('Create Method',()=>{
        it('Must create a new user',()=>{
            const newUser = {
                id:1,
                name:'new user',
                email:'new@email.com',
                password:'newuser'
            }

            const user = new User();
            return user.create(newUser)
            .then((data:any) =>{
                expect(data.dataValues).to.have.all.keys(
                    ['email','id','password','updatedAt','createdAt']
                )
            })
        })
    })



    describe('Get Method',()=>{
        it('Must return all users',async ()=>{
            const user = new User();

            const data = await user.getAllUsers();
            expect(data).to.be.an('array');
            expect(data[0]).to.have.all.keys(
                ['email', 'id', 'name', 'password']
            );
        });
    });


    describe('Update Method',
    () => {
        it('Must update a user',
        () => {
            const userUpdated = {
                name:'name updated',
                email:'emailupdated@email.com'
            }
            const user = new User();
            return user.updateUser(1, userUpdated)
            .then((data:any)=>{
                expect(data[0]).to.be.equal(1);
            })
        });
    });


    describe('Delete Method',
    () => {
        it('Must delete a user',
        () => {
            const user = new User();
            return user.deleteUser(1)
            .then((data:any)=>{
                expect(data).to.be.equal(1);
            })
        });
    });



})