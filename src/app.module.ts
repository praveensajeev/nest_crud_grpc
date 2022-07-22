import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";

@Module({
    imports:[UserModule],
    controllers:[AppController]
})



export class AppModule{

}