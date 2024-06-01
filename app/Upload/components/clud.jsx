"use client";
import { CldImage } from 'next-cloudinary';
import mazaImg from './maza-original_processed.jpg'
import Image from 'next/image';
// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Clud() {


    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // Set up an unsigned upload preset in Cloudinary settings
    formData.append('api_key', process.env.CLOUDINARY_API_KEY);
    formData.append('timestamp', Math.floor(Date.now() / 1000));
    formData.append('signature', getSignature());


    
  return (

<div className='mt-8 '>


<CldImage
      src={mazaImg} // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      crop={{
        type: 'auto',
        source: true
      }}
    />

    
</div>



  );
}