import React from "react";
import { User } from "@nextui-org/react";

interface UserCardProps {
  username: String;
}

export default function UserCard({ username }: UserCardProps) {
  return (
    <User
      className="w-full ite"
      name={` ${username}`}
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
