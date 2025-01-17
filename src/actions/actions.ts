"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";


import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const { userId } = auth();

 if (userId) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const username = formData.get("username") as string;
    const userImage = formData.get("userImage") as string;
    const userId = formData.get("userId") as string;
    
    
  

    await prisma.post.create({
      data: {
        title,
        body,
        username,
        userImage,
        imageUrl,
      },
    });
    


    revalidatePath("/posts");
    redirect("/posts");
  }
}


export async function DeletePost(pid:string){
  await prisma.post.delete({
    where: { id: pid },
  });
  
  revalidatePath("/posts");
  revalidatePath("/profile");
}