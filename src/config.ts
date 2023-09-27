import { TypeOrmModule } from "@nestjs/typeorm";
import { user } from "./user/user.entity";

export const TypeORMConfig = TypeOrmModule.forRoot({
    type:"mysql",
    host: "localhost",
    port:3306,
    username:"root",
    password:"sa@123",
    database:"sql-crud",
    entities:[user],
    synchronize:true,
   logging:true
})