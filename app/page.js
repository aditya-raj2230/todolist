'use client'
import prisma from "@/lib/prisma";
import Post from './components/Post'
import Link from 'next/link'
import { useState } from "react";

async function getPosts(){
  const posts = await prisma.post.findMany({
    where:{published:true},
    include:{
      author:{
        select:{name:true}
      }
    }
  })
  return posts
}

export default async function Home() {
  const posts=await getPosts();
  console.log({posts})

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FEED</h1>
      <Link href='/login'>login</Link>
      <Link href='/signup'>signup </Link>
      <Link href='/add-post'>Add Post</Link>
      {
        posts.map((post)=>{
          return(
            <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
            />
          )

        })
      }
    </main>
  );
}
