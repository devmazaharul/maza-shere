import React, { useState } from "react";
import Image from "next/image";
import Errormsg from "./Errormsg";
import Axios from "axios";
import UploadedData from "./components/uploadedData";
import Sherelink from "./components/Sherelink";
import LoadingIcon from "../photos/loading-gif.gif";


//firebase import
import { app } from "../(firebase)/firebase/firebaseConfig";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

export default function UploadForm() {


  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);
  const [dlink, setDlink] = useState("");
  const [loading, setLoading] = useState(false);

  const chartLimit = () => {
    const emArr = [];
    for (let index = 0; index < 20; index++) {
      emArr.push(file.name[index]);
    }
    return emArr.join("").concat("...");
  };

  const handleFileUp = (e) => {
    const fileTypecheck = e.target.files[0].type;
    if (
      fileTypecheck == "image/png" ||
      fileTypecheck == "application/pdf" ||
      fileTypecheck == "image/jpg" ||
      fileTypecheck == "image/jpeg" ||
      fileTypecheck == " application/json" ||
      fileTypecheck == "video/mp4"
      //json file extention == application/json
      //pdf file extention == application/json
      //video file extention == application/json
      //audio file extention == application/json
    ) {
      setFile(e.target.files[0]);
      setErr(null);
      e.target.value = "";
    } else {
      setErr("This type file not supported ");
      setFile(null);

      e.target.value = "";
    }
  };

  const handleFileupload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stroge = getStorage(app);
    const getRef = ref(stroge, `file-shere/${file.name}`);
    const metadata = {
      contentType: file.type,
    };

    const uploadTask = uploadBytesResumable(getRef, file, metadata)
      .then(async (e) => {
        setDlink(await getDownloadURL(getRef));
        setMsg(e.metadata);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  };

  const removeFile = (e) => {
    setFile(null);
  };

  return (
    <div>
      {msg ? (
        ""
      ) : (
        <form className="flex items-center space-x-6 shadow-lg  py-2 mb-5 rounded-lg border-purple-100 px-2 border">
          <div className="shrink-0">
            <Image width={200} height={20}
              className="h-16 w-16 object-cover "
              src="https://cdn3d.iconscout.com/3d/premium/thumb/file-8334581-6648107.png"
              alt="Current profile photo"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              name="file"
              onChange={handleFileUp}
              className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
            />
          </label>
        </form>
      )}

      {err && <Errormsg errStatus={(lrr) => setErr(lrr)} errorMsg={err} />}

      {!msg && file && (
        <div className="grid grid-cols-5 items-center  space-x-6 border py-2 shadow-md rounded-lg ">
          <div className="shrink-0 col-span-1">
            <Image
              height={100}
              alt="file icon"
              className="h-16 w-fit object-cover "
              width={100}
              src={
                file.type == "application/pdf"
                  ? "https://static.vecteezy.com/system/resources/previews/022/597/324/original/3d-file-pdf-icon-illustration-png.png"
                  : "https://static.vecteezy.com/system/resources/previews/022/029/726/original/3d-folder-file-icon-illustration-png.png"
              }
            ></Image>
          </div>
          <label className="block col-span-3 overflow-hidden">
            <b>{file.name.length > 20 ? chartLimit() : file.name}</b>

            <p className="text-gray-500">
              {file.type} --{" "}
              {parseInt(file.size / 1000) > 1000
                ? (file.size / 1000 / 1000).toFixed(2) + "Mb"
                : (file.size / 1000).toFixed(2) + "KB"}
            </p>
          </label>
          <div className="col-span-1">
            <p className="text-right  pr-6 text-red-400">
              <UploadedData removeFile={() => setFile(null)} />
            </p>
          </div>
        </div>
      )}

      {msg ? (
        ""
      ) : (
        <button
          disabled={!file}
          onClick={handleFileupload}
          className="mt-6 disabled:bg-gray-300 disabled:text-gray-400 border shadow-lg bg-purple-600 py-2 px-10 rounded-md w-[60%] md:w-[220px] mx-auto block text-white"
        >
          {loading ? (
            <Image
            alt="loading icon"
              className="mx-auto block"
              height={20}
              src={LoadingIcon}
              width={25}
            />
          ) : (
            "Upload"
          )}
        </button>
      )}

      {msg && <Sherelink dLink={dlink} shere={msg} />}
    </div>
  );
}
