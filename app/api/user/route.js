import {NextResponse} from 'next/server'
import { Prisma } from '@prisma/client';
import { hash } from 'bcrypt';
import * as z from 'zod';

// define schema for input validation 
const userSchema=z
    .object({
        name: z.string().min(1,"user name is required").max(100),
        email:z.string().min(1,'email is required').email('invalid email'),
        password:z
           .string()
           .min(1,'password is required')
           .min(8,'password must be 8 characters'),
        confirmPassword:z.string().min(1,"password confirmation required")
    })


export async function POST({request,response}){
    try{
        const body=request.json();
        const {email,name,password}=userSchema.parse(body);

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