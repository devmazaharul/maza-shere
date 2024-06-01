import React from "react";

export default function uploadedData({removeFile}) {
  return (
    <button
      onClick={removeFile}
      type="button"
      className=" px-3 border-purple-200 border py-2 rounded-xl hover:bg-purple-100"
    >
      X
    </button>
  );
}
