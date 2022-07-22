import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
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
    updateUser(@Body() updateUserDto:UpdateUserDto,@Param('userId',ParseIntPipe) userId:number){
        
        return this.userService.update(updateUserDto,userId) 
    }


    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId:number){
         return this.userService.show(userId)
    }


    @Delete('/:userId')
    DeleteUser(@Param('userId',ParseIntPipe) userId:number){
         return this.userService.delete(userId)
    }


}