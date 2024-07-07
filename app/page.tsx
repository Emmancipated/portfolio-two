"use client";
import Image from "next/image";
import hero from "@/public/hero.svg";
import blob from "@/public/blob-one.svg";
import up from "@/public/up.svg";
import phone from "@/public/phone.svg";
import mail from "@/public/mail.svg";
import google_white from "@/public/google-white.svg";
import insta_white from "@/public/Instagram-white.svg";
import bball_white from "@/public/bball-white.svg";

export default function Home() {
  return (
    <div className=" bg-white-600 flex-1 h-full p-4 sm:p-8 sm:overflow-y-auto lg:flex">
      <div className=" lg:flex justify-center items-center my-auto">
        <div className=" relative text-[#141313]">
          <h1 className=" text-[#141313] text-[30px] sm:text-[60px] leading-[32px] sm:leading-[62px] uppercase">
            My name <br />
            is<span className="font-bold font-ibm_plex"> Emmanuel</span> <br />
            <span className="font-bold">Kalu...</span>
          </h1>
          <Image
            src={blob}
            alt="blob"
            className="w-[249px] h-[60px] absolute left-[-100px] top-[-10px] z-[-1]"
          />

          <div>
            <p className=" text-sm sm:text-base font-medium my-4">
              <span className="italic font-bold">Product Designer</span>{" "}
              <span className="">based in</span>{" "}
              <span className="italic font-bold">London</span>{" "}
            </p>

            <button className=" text-[18px] font-medium flex bg-[#141313] items-center justify-center text-white py-2 px-4 my-6 gap-x-2 ">
              Let`&apos;`s talk with me
              <Image src={up} alt="arrow" />
            </button>

            <div className=" xl:flex gap-x-4">
              <div className=" flex gap-x-1 items-center">
                <Image src={phone} alt="phone" />
                <p className="text-sm lg:text-[18px] font-bold italic">
                  +77 022 444 05 05
                </p>
              </div>
              <div className=" flex gap-x-1 items-center">
                <Image src={mail} alt="mail" />
                <p className="text-sm lg:text-[18px] font-bold italic">
                  jacob360@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative">
          <Image
            src={hero}
            alt="hero"
            className=" w-full sm:max-w-[500px] sm:max-h-[500px]"
          />

          <div className=" absolute right-0 bottom-[80px] hidden sm:block">
            <Image src={google_white} alt="google" className="mb-2" />
            <Image src={insta_white} alt="google" className=" mb-2" />
            <Image src={bball_white} alt="google" />
            <div className=" bg-[#1413133a] h-[130px] w-[2px] mt-3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
