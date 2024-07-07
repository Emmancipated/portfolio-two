"use client";
import React from "react";
import Image from "next/image";
import up from "@/public/up.svg";
import img_one from "@/public/Img.svg";

export default function Blogs() {
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

        <div className=" lg:grid grid-cols-3 justify-between my-4 gap-y-8 gap-x-4">
          <div className="mb-8 lg:mb-0">
            <Image src={img_one} alt="" className=" h-auto w-full" />
            <div>
              <h3 className=" text-[16px] font-semibold italic my-2">
                UX case study
              </h3>
              <h3 className=" text-[24px] font-bold my-2">
                Bally Website Research
              </h3>
            </div>
          </div>

          <div className="mb-8 lg:mb-0">
            <Image src={img_one} alt="" className=" h-auto w-full" />
            <div>
              <h3 className=" text-[16px] font-semibold italic my-2">
                UX case study
              </h3>
              <h3 className=" text-[24px] font-bold my-2">
                Bally Website Research
              </h3>
            </div>
          </div>

          <div className="mb-8 lg:mb-0">
            <Image src={img_one} alt="" className=" h-auto w-full" />
            <div>
              <h3 className=" text-[16px] font-semibold italic my-2">
                UX case study
              </h3>
              <h3 className=" text-[24px] font-bold my-2">
                Bally Website Research
              </h3>
            </div>
          </div>

          <div className=" col-span-3 pb-4 lg:pb-0">
            <button className=" text-[18px] font-medium flex bg-[#141313] items-center justify-center text-white py-2 px-4 my-6 gap-x-2 mx-auto">
              Load more
              <Image src={up} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
