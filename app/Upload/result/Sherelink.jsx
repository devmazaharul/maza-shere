"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Sherelink({ dLink, shere }) {
  const [copy, setcopy] = useState(false);

  const copyBtn = (e) => {

    navigator.clipboard.writeText(e).then((e)=>{
      setcopy(true);
      toast.success('Copied successfull',{autoClose:2000});
    }).catch(()=>{
      toast.error('Copied unsuccessfull',{autoClose:2000});
      
    })
  

  };

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
          className="py-4 h-auto border mx-auto my-3 rounded-md "
          alt="image icon"
        ></Image>
        
      ) :shere.contentType=="audio/mpeg" ?   (  <Image
          src={
            "https://cdn3d.iconscout.com/3d/premium/thumb/audio-6847904-5607000.png?f=webp"
          }
          width={100}
          height={100}
          className="py-4 h-auto border mx-auto my-3 rounded-md "
          alt="image icon"
        ></Image>
      ) : shere.contentType=="application/vnd.openxmlformats-officedocument.wordprocessingml.document" ?  (  <Image
        src={
          "https://img.freepik.com/premium-vector/document-icon-document-sheet-icon-business-icon-3d-vector-illustration_71773-705.jpg"
        }
        width={100}
        height={100}
        className="py-4 h-auto border mx-auto my-3 rounded-md "
        alt="image icon"
      ></Image>
    )  :(
        <Image
          src={dLink}
          width={200}
          height={100}
          className="py-2 h-auto border mx-auto my-3 rounded-md px-1"
          alt="file icon"
        ></Image>
      )}



      <button
        onClick={() => copyBtn(dLink)}
        className="bg-purple-500 cursor-pointer text-gray-200 w-fit py-2 px-10 rounded-md shadow-md mx-auto block"
      >
        Copy URl
      </button>

    </div>
  );
}
