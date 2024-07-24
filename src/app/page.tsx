import Cover from "@/components/Cover";
import CoverLoggedin from "@/components/CoverLoggedin";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default function Home() {
  return (
    <ScrollShadow hideScrollBar className="w-full h-[85vh]">
    <div className="flex items-center justify-center h-[75vh] px-5">
      <SignedOut>
        <Cover />
      </SignedOut>
      <SignedIn>
        <CoverLoggedin />
      </SignedIn>
    </div>
    </ScrollShadow>
  );
}
