import React, { useRef, useState } from "react";
import Card from "./Card";

export default function Foreground() {
  //    const data=[
  //     name,desc,filesize,close_or_download,tagdetails
  //    ];
  const ref=useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".10mb",
      tagdetails: "Download Now",
      close:false,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        filesize: ".10mb",
        tagdetails: "Download",
        close: true,
        tag: { isopen: true, tagtitle: "Upload", tagcolor: "green" },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        filesize: ".10mb",
        tagdetails: "Download",
        close: true,
        tag: { isopen: false, tagtitle: "Upload", tagcolor: "green" },
      },
  ];

  return (
    <div>
      <div  ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex p-5 gap-10 flexwrap-wrap">
       {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref}/>
       ))}
      </div>
    </div>
  );
}
