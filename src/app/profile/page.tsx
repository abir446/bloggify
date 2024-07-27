import ProfileCards from "@/components/ui/Profile-Cards";
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
                userImage: user?.imageUrl || '', username: user?.fullName || '',

            },
        });
        console.log('User posts:', data1);

        // Render a ProfileCard for each post
        const profileCards = data1.map((post) => (
            <ProfileCards key={post.id} pid={post.id} imgUrl={post.imageUrl} title={post.title}/>
        ));

        return (
            <div className="max-w-2xl mx-auto">
                <div className="px-4 mb-4">Hello there {user?.fullName}</div>
                <div className="flex flex-col gap-4 ">
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
