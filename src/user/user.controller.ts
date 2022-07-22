import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
@Controller('user')
export class UserController{
    constructor(private userService:UserService){}
    @Get()
    getUsers(){
         return this.userService.get()
    }

    @Post()
    store(@Body() createUserDto:CreateUserDto){

       return this.userService.create(createUserDto)
    }
    
    
    @Patch("/:userId")
    updateUser(@Body() updateUserDto:CreateUserDto,@Param() param:{userId:number}){
        
        return this.userService.update(updateUserDto,param) 
    }


    @Get('/:usetId')
    getUser(@Param() param:{userId:number}){
         return this.userService.show(param)
    }


    @Delete('/:usetId')
    DeleteUser(@Param() param:{userId:number}){
         return this.userService.delete(param)
    }


}