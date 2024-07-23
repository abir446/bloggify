import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import nextLink from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <Navbar className="border-b border-gray-800 mb-5 ">
      <NavbarBrand>
        <SignedOut>
          <Link as={nextLink} href="/" color="foreground">
            <p className=" font-bold text-inherit italic">Bloggify</p>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </NavbarBrand>
      <NavbarContent className="md:flex gap-4" justify="start">
        <SignedIn>
          <NavbarItem>
            <Link
              as={nextLink}
              className="hover:bg-zinc-800 rounded-md px-4 py-2  transition-all duration-250 hover:text-gray-50"
              color="foreground"
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
        </SignedIn>
        <NavbarItem>
          <Link
            as={nextLink}
            className="hover:bg-zinc-800 rounded-md px-4 py-2  transition-all duration-250 hover:text-gray-50"
            href="/posts"
            color="foreground"
          >
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <SignedOut>
          <NavbarItem>
            <div className="bg-zinc-800 hover:bg-transparent transition-all duration-500 border border-gray-200 rounded-lg px-2 py-1 ">
              <SignInButton>Sign In</SignInButton>
            </div>
          </NavbarItem>
        </SignedOut>
        <div className="hidden md:flex">
          <SignedIn>
            <NavbarItem>
              <Link
                showAnchorIcon
                as={nextLink}
                className=" bg-zinc-800 hover:bg-transparent transition-all duration-500 border border-gray-200 rounded-lg px-2 py-1 "
                color="foreground"
                href="/new-blog"
              >
                Create Post
              </Link>
            </NavbarItem>
          </SignedIn>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
