"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { createPost } from "@/actions/actions";
import { CldUploadButton } from "next-cloudinary";
import { cn } from "@/lib/utils";

export function FormCover() {
  const { user } = useUser();
  const [imageUrl, setImageUrl] = useState<string>("");
  const username = user?.fullName;

  const handleUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
  };

  if (!user) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("imageUrl", imageUrl);

    // console.log("User object:", user); // Debugging line
    // console.log("User full name:", user.fullName); // Debugging line

    if (user.fullName) {
      formData.append("username", user.fullName);
    } else {
      console.error("User full name is null or undefined");
      return;
    }

    await createPost(formData);
    // console.log("Form submitted with image URL:", imageUrl);
    // console.log("Form data username:", formData.get("username")); // Debugging line
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Bloggify
        {username}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        By posting a blog, you help others to gain your knowledge
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Input
              required
              name="title"
              type="text"
              label="Post Title"
              variant="bordered"
              defaultValue=""
              className="w-full"
              labelPlacement="outside"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Textarea
            required
            name="body"
            label="Description"
            variant="bordered"
            labelPlacement="inside"
            placeholder=""
            defaultValue=""
            className="w-full"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 h-24 border-2 border-dotted rounded-lg grid place-items-center">
          <CldUploadButton uploadPreset="bloggify" onUpload={handleUpload}>
            Add Photo
          </CldUploadButton>
        </LabelInputContainer>
        <Button
          type="submit"
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
