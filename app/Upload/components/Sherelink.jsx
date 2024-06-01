"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sherelink({ dLink, shere }) {
  const [copy,setcopy]=useState(false)

const copyBtn=(e)=>{
  navigator.clipboard.writeText(e)
  setcopy(true)
}




  return (
    <div className="border  shadow-xl rounded-xl border-purple-200 py-6 px-5">
      <h1>
        File name : <b className="text-purple-500">{shere.name}</b>
      </h1>
      <h1>
        File size :{" "}
        <b className="text-purple-500">
          {parseInt(shere.size) / 1000 > 1000
            ? parseInt(shere.size / 1000 / 1000).toFixed(2) + "MB"
            : parseInt(shere.size / 1000).toFixed(2) + "KB"}
        </b>
      </h1>

      <h1 className="overflow-hidden w-[100%] mb-2 ">
        File Type : <b className="text-purple-500">{shere.contentType}</b>
      </h1>

      {shere.contentType == "video/mp4" ? (
        <video
          alt="video icon"
          muted
          controls
          autoPlay
          className="h-80 mb-3 rounded-lg shadow-lg border w-full"
          src={dLink}
        ></video>
      ) : // <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/file-8574042-6786324.png" width={100} className='py-4 h-auto border mx-auto my-3 rounded-md shadow-md' height={100} alt='aa'></Image>

      shere.contentType == "application/pdf" ? (
        <Image
      
          src={
            "https://static.vecteezy.com/system/resources/previews/009/636/767/original/document-3d-icon-png.png"
          }
          width={100}
          height={100}
          className="py-4 h-auto border mx-auto my-3 rounded-md shadow-xl"
          alt="image icon"
        ></Image>
      ) : (
        <Image
          src={dLink}
          width={200}
          height={100}
          className="py-4 h-auto border mx-auto my-3 rounded-md shadow-xl"
          alt="file icon"
        ></Image>
      )}

      <button onClick={()=>copyBtn(dLink)} className="bg-purple-500 cursor-pointer text-gray-200 w-fit py-2 px-10 rounded-md shadow-md mx-auto block">
        Copy URl
      </button>

{copy && (
  <>
  
  <div role="alert" className="rounded-xl border  mt-2 shadow-sm bg-white p-2">
  <div className="flex items-start gap-4">
    <span className="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
    <div className="flex-1">
      <strong className="block font-medium text-gray-900"> Clipboard copied successfull </strong>

      <p className="mt-1 text-sm text-gray-700">Your Can shere this link your reciver friend.</p>
    </div>
    <button onClick={()=>setcopy(false)} className="text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>


  </>
)}



    </div>
  );
}
