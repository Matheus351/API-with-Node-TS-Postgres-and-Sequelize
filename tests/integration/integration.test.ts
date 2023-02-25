import {app, request, expect} from './config/helper';
import db from '../../server/models';


describe('Integration tests',

    () => {

    
        let id:number;

        const userTest = {
            id: 100,
            name: 'Matheus',
            email: 'teste@email.com',
            password: 'teste'
        };

        const userDefault = {
            id: 1,
            name: 'default user',
            email: 'default@email.com',
            password: 'default'
        }

       

        beforeEach((done) => {
            db.User.destroy({ where: {} })
                .then(() => {
                    return db.User.create(userDefault);
                })
                .then((user:any)=>{
                    db.User.create(userTest)
                    .then(()=>{
                        done();
                    })
                })
        })



        describe('GET /users/all',
        () => {
            it('Must return an array with all users',
                done => {
                    request(app).get('/users/all')
                        .end((error:any, res) => {
                            expect(res.status).to.equal(200);
                            expect(res.body.payload).to.be.an('array');
                            expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                            expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                            done(error);
                        })
                });
        });

    describe('GET /user/:id',
        () => {
            it('Must return an array with a single user',
                done => {

                    request(app).get(`/user/${userDefault.id}`)
                        .end((error:any, res) => {
                            expect(res.status).to.equal(200);
                            expect(res.body.payload.id).to.equal(userDefault.id);
                            expect(res.body.payload).to.have.all.keys([ 
                                'id','name','email','password'
                            ]);
                            id = res.body.payload.id; 
                            done(error);
                        })
                });
        });


    describe('POST /users/create',
        () => {
            it('Must create a user',
                done => {
                    const user = { id:2, name: 'user', email:'user@email.com',password:'12345' };
                   

                    request(app).post('/users/create')
                        .send(user)
                        .end((error:any, res) => {
                            expect(res.status).to.equal(200);
                            expect(res.body.payload.id).to.eql(user.id);
                            expect(res.body.payload.name).to.eql(user.name);
                            done(error);
                        })
                });
        });


    describe('PUT /users/:id/update',
        () => {
            it('Must update a user',
                done => {

                    const user = { name: 'user' };

                    request(app).put('/users/1/update')
                        .send(user) 
                        .end((error:any, res) => {
                            expect(res.status).to.equal(200);
                            done(error);
                        })
                });
        });


    describe('DELETE /users/:id/destroy',
        () => {
            it('Must delete a user', done => {

                request(app).delete('/users/1/destroy')
                    .end((error:any, res) => {
                        expect(res.status).to.equal(200);
                        done(error);
                    })
            });
        });



    }


)