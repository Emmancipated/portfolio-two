"use client";
import React from "react";
import Image from "next/image";
import up from "@/public/up.svg";
import north_east from "@/public/north_east.svg";
import img_one from "@/public/Img.svg";
import img_two from "@/public/Img_two.svg";
import human from "@/public/human_think.svg";
import left from "@/public/left.svg";
import right from "@/public/right.svg";
import logo_one from "@/public/Logo_one.svg";
import logo_two from "@/public/Logo (1).svg";
import logo_three from "@/public/Logo (2).svg";
import logo_four from "@/public/Logo (3).svg";

export default function Works() {
  return (
    <div className=" bg-white-600 flex-1 h-full pt-8 sm:overflow-y-auto">
      <div className="px-4 sm:px-8">
        <div className="min-w-[320px]">
          <h4 className=" text-[18px] font-semibold italic">Work</h4>
          <h4 className=" text-[30px] sm:text-[48px] font-bold uppercase">
            Recent project
          </h4>
        </div>

        <div className=" lg:grid grid-cols-2 justify-between my-4 gap-y-8 gap-x-4">
          <div className=" flex sm:grid grid-cols-2 mb-2 lg:mb-0">
            <div>
              <h3 className=" text-[16px] font-semibold italic">
                UX case study
              </h3>
              <h3 className="text-[30px] font-bold ">Bally Website Research</h3>
              <Image src={north_east} alt="" className="w-[32px] h-[32px]" />
            </div>
            <Image
              src={img_one}
              alt=""
              className="max-w-[200px] h-auto w-full"
            />
          </div>

          <div className=" flex sm:grid grid-cols-2 mb-2 lg:mb-0">
            <div>
              <h3 className=" text-[16px] font-semibold italic">
                UX case study
              </h3>
              <h3 className=" text-[30px] font-bold ">
                Bally Website Research
              </h3>
              <Image src={north_east} alt="" className="w-[32px] h-[32px]" />
            </div>
            <Image
              src={img_two}
              alt=""
              className="max-w-[200px] h-auto w-full"
            />
          </div>

          <div className=" flex sm:grid grid-cols-2 mb-2 lg:mb-0">
            <div>
              <h3 className=" text-[16px] font-semibold italic">
                UX case study
              </h3>
              <h3 className=" text-[30px] font-bold ">
                Bally Website Research
              </h3>
              <Image src={north_east} alt="" className="w-[32px] h-[32px]" />
            </div>
            <Image
              src={img_two}
              alt=""
              className="max-w-[200px] h-auto w-full"
            />
          </div>

          <div className="flex sm:grid grid-cols-2 mb-2 lg:mb-0">
            <div>
              <h3 className=" text-[16px] font-semibold italic">
                UX case study
              </h3>
              <h3 className=" text-[30px] font-bold ">
                Bally Website Research
              </h3>
              <Image src={north_east} alt="" className="w-[32px] h-[32px]" />
            </div>
            <Image
              src={img_one}
              alt=""
              className="max-w-[200px] h-auto w-full"
            />
          </div>

          <div className=" col-span-2">
            <button className=" text-[18px] font-medium flex bg-[#141313] items-center justify-center text-white py-2 px-4 my-6 gap-x-2 mx-auto">
              Load more
              <Image src={up} alt="arrow" />
            </button>
          </div>
        </div>

        <div className=" bg-gr">
          <div className=" px-4 sm:p-8">
            <h3 className=" text-[18px] font-semibold text-center text-white italic pt-4 sm:pt-0">
              Testimonial
            </h3>
            <h3 className=" text-[30px] sm:text-[48px] font-bold text-center text-white uppercase">
              What they says
            </h3>

            <div className=" lg:flex items-center justify-between gap-x-8">
              <Image src={human} alt="" />
              <div>
                <h3 className=" text-white italic font-semibold text-[28px] sm:text-[32px]">
                  “ File storage made easy – including powerful features you
                  won’t find anywhere else. Whether you’re.”
                </h3>
                <h3 className=" text-white text-[24px] font-semibold my-3">
                  -Larry Diamond
                </h3>
                <h3 className=" text-white text-base font-medium">
                  Chief Executive Officer, Besnik
                </h3>
                <div className=" flex my-8 gap-x-4">
                  <div className=" bg-white rounded-full p-4 w-[48px] h-[48px] flex justify-center">
                    <Image src={left} alt="" />
                  </div>
                  <div className=" bg-white rounded-full p-4 w-[48px] h-[48px] flex justify-center">
                    <Image src={right} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[1px]"></div>

            <div className=" grid grid-cols-4 mt-3">
              <Image src={logo_one} alt="" />
              <Image src={logo_two} alt="" />
              <Image src={logo_three} alt="" />
              <Image src={logo_four} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
