import React from "react";
import { User } from "@nextui-org/react";

export default function UserCard() {
  return (
    <User
      className="w-full ite"
      name="Jane Doe"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
