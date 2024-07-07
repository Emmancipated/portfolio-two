"use client";
import Image from "next/image";
import up from "@/public/up.svg";
import link from "@/public/link_chain.svg";

export default function Contact() {
  return (
    <div className=" bg-white-600 flex-1 h-full p-4 sm:p-8 sm:overflow-y-auto">
      <div className=" lg:grid grid-cols-[40%60%]">
        <div className=" flex flex-col justify-between">
          <div>
            <h4 className=" text-[18px] font-semibold italic">Contact</h4>
            <h4 className="text-[30px] sm:text-[48px] font-bold uppercase my-6">
              Reach out me
            </h4>
            <p>
              249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC
              3000, London.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <h3 className=" text-[28px] xl:text-[32px] font-bold">
              +77 022 444 05 05
            </h3>
            <h3 className=" text-[28px] xl:text-[32px] font-bold">
              jacob360@gmail.com
            </h3>
          </div>

          <div className=" flex justify-between lg:grid grid-cols-4 mt-4 lg:mt-0">
            <h4 className=" font-medium text-base uppercase">Facebook</h4>
            <h4 className=" font-medium text-base uppercase">Twitter</h4>
            <h4 className=" font-medium text-base uppercase">Instagram</h4>
            <h4 className=" font-medium text-base uppercase">Linkedin</h4>
          </div>
        </div>

        <div className=" sm:pr-8 mt-10">
          <div className=" bg-gr pl-4 sm:pl-8 py-[40px] pr-4 sm:pr-8">
            <div className="">
              <h4 className=" text-white font-bold  text-[30px] sm:text-[48px] uppercase">
                any project?
              </h4>

              <div className=" xl:grid grid-cols-2 gap-x-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="bg-transparent border-b border-solid border-b-white outline-none placeholder:text-white w-full xl:w-auto my-4 xl:my-0 text-white"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-transparent border-b border-solid border-b-white outline-none placeholder:text-white w-full xl:w-auto my-4 xl:my-0 text-white"
                />

                <textarea
                  name=""
                  id=""
                  placeholder="MESSAGE"
                  className=" col-span-2 bg-transparent border-b border-solid border-b-white outline-none mt-6 resize-none placeholder:text-white w-full xl:w-auto text-white"
                  rows={3}
                  cols={30}
                ></textarea>

                <div className="mt-4">
                  <label
                    htmlFor="files"
                    className="btn uppercase flex text-white absolute cursor-pointer"
                  >
                    <Image src={link} alt="" />
                    <span>Attach file</span>
                  </label>
                  <input id="files" type="file" className="text-white" />
                </div>
              </div>

              <button className=" text-[18px] font-medium flex bg-[#141313] items-center justify-center text-white py-2 px-4 my-6 gap-x-2">
                Submit now
                <Image src={up} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
