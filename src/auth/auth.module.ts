import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './auth.constant';
import { AuthController } from './auth.controller';
import { jwtStrategy } from './auth.jwt.strategy';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local-strategy';


@Module({
    controllers:[AuthController],
    imports:[UserModule,PassportModule,JwtModule.register({
        secret:jwtConstants.secret ,
        signOptions:{expiresIn:'60s'}
    })],
    providers: [AuthService,LocalStrategy,jwtStrategy]})
export class AuthModule {}
