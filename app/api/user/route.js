import {NextResponse} from 'next/server'
import { Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

export async function POST({request,response}){
    try{
        const body=request.json();
        const {email,name,password}=body;

        // to check if email already exists
        const existingUserByEmail = await Prisma.user.findUnique({
            where:{
                email:email
            }
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"user already exists"},{status:409})
        }
        const hashedPassword = await hash(password,10);
        const user = await Prisma.user.create({
            data:{
                name,
                email,
                hashedPassword
            }
        })
        return NextResponse.json({user:newUser,message:"user created success"})
    }
    catch(error){
        
    }
    return NextResponse.json({success:true})
}