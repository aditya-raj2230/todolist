import prisma from "@/lib/prisma";

async function getPosts(){
  const posts = await prisma.post.findMany({
    where:{published:true}
  })
  return posts
}

export default async function Home() {
  const postes=await getPosts();
  console.log({postes})

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FEED</h1>
    </main>
  );
}
