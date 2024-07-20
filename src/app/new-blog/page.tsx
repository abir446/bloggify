import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Page from "../sign-in/[[...sign-in]]/page";

const page = () => {
  return (
    <div>
      <SignedIn>
        <div className="max-w-[75vw] mx-auto ">Create A new post</div>
      </SignedIn>
      <SignedOut>
        <Page />
      </SignedOut>
    </div>
  );
};

export default page;
