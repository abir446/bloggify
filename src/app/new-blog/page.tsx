import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Page from "../sign-in/[[...sign-in]]/page";
import { FormCover } from "@/components/FormCover";

const page = () => {
  return (
    <div>
      <SignedIn>
        <div className=" ">
          <FormCover />
        </div>
      </SignedIn>
      <SignedOut>
        <Page />
      </SignedOut>
    </div>
  );
};

export default page;
