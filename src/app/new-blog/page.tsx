import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Page from "../sign-in/[[...sign-in]]/page";

const page = () => {
  return (
    <div>
      <SignedIn>Create post</SignedIn>
      <SignedOut>
        <Page />
      </SignedOut>
    </div>
  );
};

export default page;
