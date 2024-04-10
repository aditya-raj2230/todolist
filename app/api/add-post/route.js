import {NextResponse} from 'next/server'

export async function POST(request){
    const res=await request.json()
    const {content} = res;
    console.log({res})

    const result = await prisma.post.create({
        data:{
            title:"new",
            published:true,
            content,
            author:{create:{
                name:"adi"
            }}
        }
    })


    return NextResponse.json({result})
}