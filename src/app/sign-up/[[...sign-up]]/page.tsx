import { SignUp } from "@clerk/nextjs";

export default function Page() {
  
  return (
    <div className="text-center flex items-center justify-center">
      <SignUp />
    </div>
  );
}
