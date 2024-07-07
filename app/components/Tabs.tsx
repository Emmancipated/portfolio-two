"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import plusIcon from "@/public/PlusCircle.svg";
import minusIcon from "@/public/minusCircle.svg";

const Tabs = ({
  highlight,
  header,
  content,
  updateTabFunc,
  activeTab,
}: {
  highlight: string;
  header: string;
  content?: React.ReactNode;
  updateTabFunc: (value: string) => void;
  activeTab: string;
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    updateTabFunc(highlight);
    setShowContent(!showContent);
  };

  return (
    <>
      <div className=" lg:grid grid-cols-2 items-center ">
        <div className=" flex items-center gap-x-3">
          <div
            className={`h-2 w-2 rounded-full ${
              activeTab === highlight ? "bg-[#b86adf]" : "bg-[#141313]"
            }`}
          ></div>
          <div
            className={` text-[28px] sm:text-[32px] font-bold uppercase ${
              activeTab === highlight ? "text-gradient" : ""
            } `}
          >
            {highlight}
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-x-8 my-3 justify-between">
            <p className=" text-base font-normal">{header}</p>
            <Image
              src={activeTab === highlight ? minusIcon : plusIcon}
              alt="toggle"
              className=" cursor-pointer "
              onClick={handleToggle}
            />
          </div>
          {activeTab === highlight && <div className="mb-3">{content}</div>}
        </div>

        <div className=" col-span-2 h-[1px] bg-[#1413133a]"></div>
      </div>
    </>
  );
};

export default Tabs;
