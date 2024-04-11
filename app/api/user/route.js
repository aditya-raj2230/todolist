import {NextResponse} from 'next/server'

import { hash } from 'bcrypt';


// define schema for input validation 



export async function POST(request){
    try{
        const body=request.json();
        const {email,name,password}=body;

        // to check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where:{
                email:email
            }
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"user already exists"},{status:409})
        }

        const hashedPassword = await hash(password,10);
        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })
       
        return NextResponse.json({user:newUser},{status:201})
    }
    catch(error){
        return NextResponse.json({error:error})
    }
}