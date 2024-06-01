import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="md:grid flex md:grid-cols-5 bg-gray-50  shadow-sm mb-3 py-4">
      <div className="logo col-span-1 mx-auto text-center">
        <h1>
          <Link href={"/"}>
            <p className={`font-bold text-xl`}>
              <b className="text-purple-500 ">Maza</b>-Shere
            </p>
          </Link>
        </h1>
      </div>
      <div className="logo col-span-4 mx-auto">
        <ul className="flex gap-3 md:gap-7">
      
          <li>
            <Link href={"/files"} className=" focus:text-indigo-700">
              Files
            </Link>
          </li>
          <li>
            <Link href={"/about"} className=" focus:text-indigo-700">
              About
            </Link>
          </li>
          <li>
            <Link href={"/profile"} className=" focus:text-indigo-700">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
