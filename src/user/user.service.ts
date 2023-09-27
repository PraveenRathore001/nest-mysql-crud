import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { userdto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(user) private usermodel:Repository<user>){}

async create(user: user){
   const a=this.usermodel.create({...user,createdat: new Date()});
    return this.usermodel.save(a)
}
async findusers(){
    return this.usermodel.find()
}
async updateeduser(id:number,user:Partial<user>){
   const aa= await this.usermodel.update({id},user)
//    return this.usermodel.save(aa)
   console.log(aa);
//    this.usermodel.save(aa)
   return await this.usermodel.findOne({where:{id:id}})
}

}
