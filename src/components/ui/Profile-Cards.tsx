import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import DeleteButton from "../DeleteButton";


interface ProfileCardsProps{
    imgUrl: string;
    title: string;
    pid: string;
}

export default function ProfileCards({imgUrl,title,pid}: ProfileCardsProps) {
  return (
    <Card className="py-4 md:px-16 flex flex-col items-center justify-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible flex flex-col gap-2 py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imgUrl}
          width={270}
        />

      </CardBody>
        <DeleteButton pid={pid} />
    </Card>
  );
}
