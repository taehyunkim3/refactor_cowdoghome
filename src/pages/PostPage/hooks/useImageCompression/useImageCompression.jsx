import { useState } from "react";
import imageCompression from "browser-image-compression";

export const useImageComporession = (options) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    try {
      const compressed = await imageCompression(imageFile, options);
      const url = URL.createObjectURL(compressed);
      setImageUrl(url);
      setCompressedFile(compressed);
    } catch (error) {
      console.error(error);
    }
  };

  return [imageUrl, compressedFile, handleImageChange];
};
