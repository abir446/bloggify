'use client'
import React from "react";
import nextLink from "next/link";
import { SignedIn, SignedOut, SignInButton,SignOutButton } from "@clerk/nextjs";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link as={nextLink} href="/" color="foreground">
            <p className=" font-bold text-inherit italic">Bloggify</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      <SignedIn>
        <NavbarItem >
          <div className="bg-zinc-800 hover:bg-transparent transition-all duration-500 border border-gray-200 rounded-lg px-2 py-1 ">
              <SignOutButton>Sign Out</SignOutButton>
            </div>
        </NavbarItem>
        </SignedIn>
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
      <NavbarMenu>
        
          <NavbarMenuItem>
          <Link
            as={nextLink}
            className="hover:bg-zinc-800 rounded-md px-4 py-2  transition-all duration-250 hover:text-gray-50"
            href="/posts"
            color="foreground"
          >
            Posts
          </Link>
          </NavbarMenuItem>
          <SignedIn>
          <NavbarMenuItem>
          <Link
            as={nextLink}
            className="hover:bg-zinc-800 rounded-md px-4 py-2  transition-all duration-250 hover:text-gray-50"
            href={`/profile`}
            color="foreground"
          >
            Profile
          </Link>
          </NavbarMenuItem>
          </SignedIn>
          <SignedIn>
          <NavbarMenuItem>
          <Link
            as={nextLink}
            className="hover:bg-zinc-800 rounded-md px-4 py-2  transition-all duration-250 hover:text-gray-50"
            href={`/new-blog`}
            color="foreground"
          >
            Create Post
          </Link>
          </NavbarMenuItem>
          </SignedIn>
      </NavbarMenu>
    </Navbar>
  );
}



