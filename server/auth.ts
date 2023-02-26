import passport from "passport";
import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt';
import User from "./modules/User/service";
const config = require('./config/env/config')();


export default function AuthConfig(){

    const userService = new User();


    let opts:StrategyOptions = {
        secretOrKey:config.secret,
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
    }


    passport.use(new Strategy(opts, (jwtPayload, done) => {

        userService.getUserById(jwtPayload.id)
        .then(user=>{
            if(user){
                return done(null, {id:user.id, email:user.email});
            }
            return done(null,false);
        })
        .catch(error => {
            done(error, false);
        })

    }));


    
    return {
        initialize:() => { return passport.initialize()  },
        authenticate:() => { return passport.authenticate('jwt',{session:false}) }
    }




}