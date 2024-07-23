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
    // console.log(title);
    // console.log(username);

    await prisma.post.create({
      data: {
        title,
        body,
        username,
        imageUrl,
      },
    });

    revalidatePath("/posts");
    redirect("/posts");
  }
}
