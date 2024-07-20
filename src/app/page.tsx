import Cover from "@/components/Cover";
import CoverLoggedin from "@/components/CoverLoggedin";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <h1 className="flex items-center justify-center h-[75vh] px-5">
      <SignedOut>
        <Cover />
      </SignedOut>
      <SignedIn>
        <CoverLoggedin />
      </SignedIn>
    </h1>
  );
}
