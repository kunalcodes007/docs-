import React from "react";

export default function Background() {
  return (
    <div className=" w-full h-screen fixed z-[2]">
      <div className="w-full py-10 left-1/2 flex justify-center top-[5%] text-zinc-400 text-xl font-semibold">
        Documents
      </div>
      <h1 className="text-[13vw] absolute  leading-none top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-950 ">
        docs.
      </h1>
    </div>
  );
}
