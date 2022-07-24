import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./auth.constant";


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){

    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
        });
      }

    async validate(payload:any){
        return {id:payload.sub,email:payload.email}
    }
}