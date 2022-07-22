import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
    get(){
           return 'this is your users'
    }

    create(createUserDto:CreateUserDto){
         return createUserDto;
    }

    update(updateUserDto:CreateUserDto,param:{userId:number}){
        return {updateUserDto,param}
    }

    show(param:{userId:number}){
      return param
    }

    delete(param:{userId:number}){
       return param
    }
}
