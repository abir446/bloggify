
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Profile(){

    const user = await currentUser();
    return (
        <div className="px-4">Hello there {user?.fullName}</div>
    )
}