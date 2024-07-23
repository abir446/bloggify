import React from "react";
import { User } from "@nextui-org/react";

interface UserCardProps {
  username: string;
  userImage: string;
}

export default function UserCard({ username, userImage }: UserCardProps) {
  return (
    <User
      className="w-full ite"
      name={username}
      avatarProps={{ src: userImage }}
    />
  );
}
