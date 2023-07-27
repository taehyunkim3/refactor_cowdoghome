import { useContext, useRef, useState } from "react";
import imageCompression from "browser-image-compression";

import {
  TextBox,
  Camera,
  InputFileLayout,
  InputFileLayoutContainer,
  ChangeFileLayout,
} from "./style";
import { MdPhotoCamera } from "react-icons/md";
import { DraggableButtonInCard } from "../DraggableButtonInCard";
import { PostPageContext } from "../../contexts/PostPageContext";

const initialInput = {
  content: "",
};
export const InputFile = ({}) => {
  const { setPostData, postData } = useContext(PostPageContext);

  const fileUpload = useRef();
  const [fileUrl, setFileUrl] = useState(null);
  const [input, setInput] = useState(initialInput);

  // ⬇️ 이미지 압축 옵션
  const options = {
    maxSizeMB: 0.8,
    maxWidthOrHeight: 1700,
    useWebWorker: true,
  };
  // ⬇️ 이미지 압축
  const onChangeImage = async (e) => {
    const imageFile = e.target.files[0];
    try {
      const compressedFile = await imageCompression(imageFile, options);
      const imgUrl = URL.createObjectURL(compressedFile);
      setFileUrl(imgUrl);
      setPostData({ ...input, imgUrl: compressedFile });
    } catch (error) {
      console.error(error);
    }
  };
  // ⬇️ 텍스트 입력
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };
  return (
    <>
      {fileUrl ? (
        <>
          <DraggableButtonInCard
            fileUrl={fileUrl}
            setInput={setInput}
            input={input}
          />
        </>
      ) : (
        <>
          <InputFileLayoutContainer>
            <InputFileLayout>
              {" "}
              <Camera>
                <MdPhotoCamera />
              </Camera>
              <p className="bigText">사진을 끌어다놓아요 </p>
              <p className="smallText">1장만 업로드가 가능해요.</p>
              <label htmlFor="file" className="pcload">
                PC에서 불러오기
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={onChangeImage}
                ref={fileUpload}
              />
            </InputFileLayout>
          </InputFileLayoutContainer>
        </>
      )}

      <TextBox>
        <textarea
          type="text"
          name="content"
          onChange={onChangeValue}
          value={postData.content}
          placeholder="어떤 사진인지 짧은 소개로 시작해보세요."
        />
        {fileUrl && (
          <ChangeFileLayout>
            <label htmlFor="file" className="pcload">
              사진 다시 불러오기
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={onChangeImage}
              ref={fileUpload}
            />
          </ChangeFileLayout>
        )}
      </TextBox>
    </>
  );
};
