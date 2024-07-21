"use client";
import React from "react";
import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";

import { Button } from "@nextui-org/button";

export function FormCover() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Bloggify
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        By posting a blog, you help others to gain your knowledge
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Input
              type="text"
              label="Post Title"
              variant="bordered"
              defaultValue=""
              className="w-full "
              labelPlacement="outside"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Textarea
            label="Description"
            variant="bordered"
            labelPlacement="inside"
            placeholder=""
            defaultValue=""
            className="w-full"
          />
        </LabelInputContainer>

        <Button
          className="w-full hover:bg-zinc-900 transition-all duration-400"
          color="default"
          variant="ghost"
        >
          Post
          <BottomGradient />
        </Button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
