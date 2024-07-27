import { ProfileCards } from "@/components/ui/Profile-Cards";
import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Profile() {
    const user = await currentUser();

    if (!user) {
        return (
            <div>No user found</div>
        );
    }
    
    try {
        const data1 = await prisma.post.findMany({
            where: {
                username: user?.fullName,
            },
        });
        console.log('User posts:', data1);

        // Render a ProfileCard for each post
        const profileCards = data1.map((post) => (
            <ProfileCards key={post.id} imgUrl={post.imageUrl} />
        ));

        return (
            <div className="">
                <div className="px-4">Hello there {user?.fullName}</div>
                <div className="">
                    {profileCards}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching user posts:', error);
        return (
            <div>Error fetching user posts</div>
        );
    }
}
