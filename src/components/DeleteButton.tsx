'use client'
import { DeletePost } from "@/actions/actions";
import {Button} from "@nextui-org/button";

interface DeleteButtonProps{
    pid: string,
}

export default function DeleteButton({pid}:DeleteButtonProps){

    async function handleDelete(){
        console.log(pid)
        await DeletePost(pid)
    }

    return (
        <Button onClick={handleDelete} color="danger">
        Delete Post
      </Button>
    )
}