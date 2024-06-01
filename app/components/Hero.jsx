import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="main text-center md:w-[50%] mx-auto  py-10">
        <h1 className="text-3xl font-semibold py-8 leading-10">Best file shereing web application in Bangladeh...</h1>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
          quos rerum dolor amet neque dignissimos dolores ratione totam
          nesciunt.
        </p>
        <div className="actions grid gap-2 grid-cols-2 w-fit mt-8 mx-auto ">
          <Link className="shadow-xl  rounded-md outline-none bg-purple-500 px-8 py-2 text-gray-100" href={"/Upload"}>Get start</Link>
          <Link  className="shadow-lg border rounded-md outline-none  px-10 py-2 " href={"#"}>See more</Link>
        </div>
      </div>
    </>
  );
}
