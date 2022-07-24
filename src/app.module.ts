import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { User } from "./user/entity/user.entity";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
    imports:[UserModule,
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'praveen1@A',
        database: 'user_crud',
        entities: [User],
        synchronize: true,
      }),
        AuthModule,
        ProfileModule],
    controllers:[AppController]
})



export class AppModule{

}