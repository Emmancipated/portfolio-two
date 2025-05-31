"use client";
import React from "react";
import Image from "next/image";
import up from "@/public/up.svg";
import img_one from "@/public/Img.svg";

export default function Payment() {
  return (
    <div className=" bg-white-600 flex-1 h-full pt-8 sm:overflow-y-auto">
      <div className="px-4 sm:px-8">
        <div className="min-w-[320px]">
          <h4 className=" text-[18px] font-semibold italic text-center">
            Blog
          </h4>
          <h4 className=" text-[30px] sm:text-[48px] font-bold uppercase text-center">
            Read my blog
          </h4>
        </div>

        <p>I am testing payment on this page.</p>
      </div>
    </div>
  );
}
