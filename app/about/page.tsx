"use client";
import Image from "next/image";
import hero from "@/public/hero-one.svg";
import up from "@/public/up.svg";
import phone from "@/public/phone.svg";
import mail from "@/public/mail.svg";
import age from "@/public/age.svg";
import location from "@/public/location.svg";
import quotation from "@/public/quotation.svg";

export default function About() {
  return (
    <div className=" bg-white-600 flex-1 h-full pt-4 sm:pt-8 sm:overflow-y-auto relative">
      <div className="px-4 sm:px-8 lg:flex">
        <div className="min-w-[320px]">
          <h4 className=" text-[18px] font-semibold italic">
            Nice to meet you!
          </h4>
          <h4 className=" text-[30px] sm:text-[48px] font-bold uppercase">
            Welcome to...
          </h4>
          <Image src={hero} alt="owner" className="mx-auto sm:mx-0" />

          <div className=" w-fit mx-auto sm:mx-0">
            <h4 className=" uppercase text-[30px] sm:text-[48px] font-bold text-gradient inline-block">
              Emmanuel Kalu
            </h4>
          </div>
          <div className="">
            {" "}
            <p className="  font-medium my-4 mx-auto w-fit">
              <span className="italic font-bold">Product Designer</span>{" "}
              <span className="">based in</span>{" "}
              <span className="italic font-bold">London</span>{" "}
            </p>
          </div>

          <button className=" text-[18px] font-medium flex items-center justify-center underline py-2 px-4 my-6 gap-x-2 mx-auto">
            Download CV
            <Image src={up} alt="arrow" />
          </button>
        </div>

        <div className=" sm:grid lg:block grid-cols-2 self-end gap-y-4">
          <div className=" flex gap-x-1 items-center mt-1 sm:mt-0">
            <Image src={phone} alt="phone" />
            <p className=" text-sm lg:text-[18px] font-bold italic">
              +77 022 444 05 05
            </p>
          </div>

          <div className=" flex gap-x-1 items-center mt-1 sm:mt-0">
            <Image src={age} alt="age" />
            <p className=" text-sm lg:text-[18px] font-bold italic">29</p>
          </div>

          <div className=" flex gap-x-1 items-center mt-1 sm:mt-0">
            <Image src={mail} alt="mail" />
            <p className=" text-sm lg:text-[18px] font-bold italic">
              jacob360@gmail.com
            </p>
          </div>

          <div className=" flex gap-x-1 items-center mt-1 sm:mt-0">
            <Image src={location} alt="location" />
            <p className=" text-sm lg:text-[18px] font-bold italic">
              United kingdom, London
            </p>
          </div>
          <div className=" bg-[#1413133a] h-[2px] col-span-2 mt-2 sm:mt-0"></div>

          <div>
            <div className=" flex items-center gap-x-2">
              <h4 className=" text-[48px] font-bold text-gradient font-ibm_plex">
                10+
              </h4>
              <p className=" text-[18px] font-bold">
                Years <br />
                experience...
              </p>
            </div>
            <p className=" text-sm sm:text-[18px] font-normal">
              Hello there! My name is{" "}
              <span className="text-gradient">Jacob Jones</span> . I am a web
              designer & developer, and I'm very passionate and dedicated to my
              work.
            </p>
          </div>

          <div>
            <div className=" flex items-center gap-x-2">
              <h4 className=" text-[48px] font-bold text-gradient">14</h4>
              <p className=" text-[18px] font-bold">
                Clients <br /> Worldwide...
              </p>
            </div>
            <p className=" text-sm sm:text-[18px] font-normal">
              With 10+ years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
          </div>
          <div className=" col-span-2 bg-[#141313] p-[40px] flex items-center gap-x-4">
            <Image src={quotation} alt="quotation" />
            <p className=" text-white font-semibold sm:text-[20px] italic">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              sed sit ultrices et sed metus sollicitudin.”
            </p>
          </div>
        </div>
      </div>

      <div className="pl-4 sm:pl-0 pr-4 sm:pr-8 mt-10">
        <div className=" bg-gr lg:flex pl-4 sm:pl-8 py-[40px] pr-4 sm:pr-8 gap-x-4">
          <div className="max-w-[320px]">
            <h4 className=" text-white font-semibold text-[18px] italic">
              Experience
            </h4>
            <h4 className=" text-white font-bold text-[30px] xl:text-[48px] uppercase">
              My experience
            </h4>
            <p className="  sm:text-[18px] font-normal text-white">
              Hello there! My name is Jacob Jones. I am a web designer &
              developer, and I'm very passionate and dedicated to my work.
            </p>
            <button className=" text-[18px] font-medium flex bg-[#141313] items-center justify-center text-white py-2 px-4 my-6 gap-x-2">
              Let’s talk with me
              <Image src={up} alt="arrow" />
            </button>
          </div>

          <div className="w-full flex-1">
            <div className=" mb-4">
              <div className=" flex justify-between">
                <h4 className="text-white font-semibold text-base sm:text-[18px] italic">
                  -2018 - Present
                </h4>
                <h4 className="text-white font-medium text-sm sm:text-[16px]">
                  -Rolling Thunder
                </h4>
              </div>
              <h4 className=" text-white font-bold text-[28px] xl:text-[32px] my-[20px]">
                Lead UI/UX Designer
              </h4>
              <div className=" bg-white h-[1px]"></div>
            </div>

            <div className=" mb-4">
              <div className=" flex justify-between">
                <h4 className="text-white font-semibold text-base sm:text-[18px] italic">
                  -2018 - 2010
                </h4>
                <h4 className="text-white font-medium text-sm sm:text-[16px]">
                  -Locost Accessories
                </h4>
              </div>
              <h4 className=" text-white font-bold text-[28px] xl:text-[32px] my-[20px]">
                Senior UI/UX Designer
              </h4>
              <div className=" bg-white h-[1px]"></div>
            </div>

            <div className=" mb-4">
              <div className=" flex justify-between">
                <h4 className="text-white font-semibold text-base sm:text-[18px] italic">
                  -2008 - 2006
                </h4>
                <h4 className="text-white font-medium text-sm sm:text-[16px]">
                  -Sagebrush
                </h4>
              </div>
              <h4 className=" text-white font-bold text-[28px] xl:text-[32px] my-[20px]">
                Junior UI/UX Designer
              </h4>
              <div className=" bg-white h-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
