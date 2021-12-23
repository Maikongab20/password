import { client } from "../../prisma/client"

interface IUserRequest{
    name: string;
    username: string;
    password: string;
}

class CreateUser{

    async execute({name,username,password}: IUserRequest){

        const useralreadyExists = await client.user.findFirst({
            where:{
                username
            }
        });

        if(useralreadyExists){
            throw new Error("user alreasdy exists")
        }

        
        const user = await client.user.create({
            data:{
                name,
                username,
                password
            }
        });
    }

}

export { CreateUser }