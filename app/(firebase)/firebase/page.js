"use client";
import React, { useState } from "react";
import { app } from "./firebaseConfig";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

export default function page() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stroge = getStorage(app);
    const getRef = ref(stroge, `file-shere/${file.name}`);
    const metadata = {
      contentType: file.type,
    };

    await uploadBytesResumable(getRef, file, metadata)
      .then(async (e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          name="file"
          id="file"
        />
        <button className="border" onClick={handleSubmit}>
          {loading ? "loading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
