import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function Cover() {
  const isFollowed = false;

  return (
    <Card className="max-w-[100%] ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Abir Dutta
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @creator.bloggify
            </h5>
          </div>
        </div>
        <Button
          as={Link}
          href="https://x.com/DuttaAbir390"
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
        >
          {isFollowed ? "Unfollow" : "Follow Creator"}
        </Button>
      </CardHeader>
      <CardBody className="px-4 md:flex  py-2 text-small text-default-400">
        <Image
          //   isBlurred
          width={300}
          height={200}
          radius="lg"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          alt="Bloggify Home Page"
          className="mx-5  mb-3"
        />
        <div className="pb-5">
          <p className="text-2xl">
            Join the platform for staying informed about all the latest tech
            news!
          </p>
          <span className="pt-2">
            #keepothersinformed
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
