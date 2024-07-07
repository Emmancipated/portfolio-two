"use client";
import Image from "next/image";
import stereo from "@/public/stereo.svg";
import React, { useState } from "react";
import Tabs from "../components/Tabs";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Web Design");
  const updateTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className=" bg-white-600 flex-1 h-full pt-4 sm:pt-8 sm:overflow-y-auto">
      <div className="px-4 sm:px-8">
        <div className="min-w-[320px] mb-4 sm:mb-0">
          <h4 className=" text-[18px] font-semibold italic">Service</h4>
          <h4 className=" text-[30px] sm:text-[48px] font-bold uppercase">
            My Specialties
          </h4>
        </div>
        <Tabs
          highlight="Web Design"
          header="You can customize a template or make your own from scratch, with
                an immersive library at your disposal. You can customize a
                template"
          updateTabFunc={updateTab}
          activeTab={activeTab}
        />
        <Tabs
          highlight="UI/UX Design"
          header="You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template"
          updateTabFunc={updateTab}
          activeTab={activeTab}
        />
        <Tabs
          highlight="Mobile Application"
          header=""
          updateTabFunc={updateTab}
          activeTab={activeTab}
          content={
            <div>
              <Image src={stereo} alt="e" />
              <p>
                You can customize a template or make your own from scratch, with
                an immersive library at your disposal. You can customize a
                template
              </p>
            </div>
          }
        />

        <Tabs
          highlight="User research"
          header="You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template"
          updateTabFunc={updateTab}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}
