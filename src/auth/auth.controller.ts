import {  Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(AuthGuard('local'))     
    @Post('/login')
  async  login(@Request() req:any) {
      console.log(req);
       return this.authService.login(req.user);
}
}
