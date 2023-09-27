import { Body, Controller, Get, Injectable, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'src/user/user.entity';
import { userdto } from './user.dto';

@Controller('user')
export class UserController {
constructor(private UserService:UserService){}

@Post()
createuser(@Body() user:user){
    return this.UserService.create(user)
}
@Get('/get')
getalluser(){
    return this.UserService.findusers()
}
@Patch(':id')
 uppdateUser(@Param('id',ParseIntPipe) id: number, @Body() user: Partial<userdto>) {
    return this.UserService.updateeduser(id,user)
 }


}
