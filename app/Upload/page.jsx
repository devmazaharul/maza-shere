"use client";
import React, { useState } from "react";
import UploadForm from "./UploadForm";

export default function Page() {
  const [file, setFile] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    setSubmit(true);

    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-3xl text-purple-600 font-bold text-center mt-4">
        Shere Your Files
      </h1>

      <div className="w-[99%] md:w-[500px] mx-auto  p-3 mt-6">
        <UploadForm />
      </div>
    </>
  );
}
