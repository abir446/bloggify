import React from "react";
import {Image} from "@nextui-org/react";

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center '>
    <Image
      width={500}
      height={300}
      sizes="2xl"
      alt="Loading Information..."
      src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
    </div>
  );
}
