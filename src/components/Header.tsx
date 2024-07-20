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
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
export default function Header() {
  return (
    <Navbar className="border-b border-gray-800 mb-5">
      <NavbarBrand>
        <Link as={nextLink} href="/" color="foreground">
          <p className="font-bold text-inherit italic">Bloggify</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            as={nextLink}
            className="hover:underline underline-offset-2 transition-all duration-250 hover:text-gray-50"
            color="foreground"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={nextLink} href="/posts" color="foreground">
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <SignedOut>
          <NavbarItem>
            <Link
              as={nextLink}
              className="hover:bg-zinc-800 transition-all duration-500 border border-gray-200 rounded-lg px-2 py-1 "
              color="foreground"
              href="/new-blog"
            >
              Post
            </Link>
          </NavbarItem>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
}
