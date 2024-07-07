"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import google from "@/public/Goggle.svg";
import insta from "@/public/Instagram.svg";
import bball from "@/public/bball.svg";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Works", path: "/works" },
  { id: 5, name: "Blogs", path: "/blogs" },
  { id: 6, name: "Contact", path: "/contact" },
];

export default function SideNav() {
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  const [slideIn, setSlideIn] = useState(false);

  return (
    <>
      <HambergerMenu
        size="32"
        color="#141313"
        className=" absolute right-4 top-4 md:hidden cursor-pointer z-20"
        onClick={() => setSlideIn(!slideIn)}
      />

      <div
        className={` absolute ${
          slideIn ? "left-[0]" : "left-[-300px]"
        } bg-[#141313] md:relative md:left-0 flex-1 max-w-[285px] min-w-[270px] md:max-w-[250px] lg:max-w-[285px] p-[48px] transition-all z-10 h-full`}
      >
        <div className=" flex flex-col justify-between h-full">
          <Image src={logo} alt="" />
          <div>
            {NavLinks.map((link) => {
              return (
                <div
                  key={link.id}
                  className="relative"
                  onClick={() => setSlideIn(false)}
                >
                  <Link
                    href={link.path}
                    className={`${
                      isActive(link.path) ? "active  font-bold" : "font-normal"
                    } relative inline-block my-1 uppercase text-white text-base xl:text-[20px] z-10`}
                  >
                    {link.name}
                    <div
                      className={`${
                        isActive(link.path) ? "opacity-100" : "opacity-0"
                      } bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] h-1 w-full absolute z-[1] top-[11px] md:top-[12px]`}
                    ></div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div>
            <div className=" mb-2">
              <Image src={google} alt="google" />
            </div>
            <div className=" mb-2">
              <Image src={insta} alt="insta" />
            </div>
            <div className=" mb-2">
              <Image src={bball} alt="bball" />
            </div>
            <p className="text-sm xl:text-base text-white mt-4">
              Copyright ©2024 Jacob Jones. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
