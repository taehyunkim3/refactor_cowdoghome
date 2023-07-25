import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import imageCompression from "browser-image-compression";

import { TextBox } from "./style";
import { DraggablePoint } from "../DraggablePoint";
import { useComponentSize } from "../../hooks";
import { MdPhotoCamera } from "react-icons/md";
import { DraggableButtonInCard } from "../DraggableButtonInCard";

const InputFileLayout = styled.div`
  text-align: center;
  label {
    padding: 10px 20px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  .pcload {
    margin: 0px;
    border: none;
    background: none rgb(53, 197, 240);
    font-size: 14px;
    line-height: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: rgb(255, 255, 255);
    border-radius: 4px;
  }
  .bigText {
    margin: 0px 0px 4px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgb(130, 140, 148);
  }
  .smallText {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: rgb(130, 140, 148);
  }
`;

const Camera = styled.div`
  display: inline-block;
  font-size: 24px;
  line-height: 1;
  margin: 0px 0px 12px;
  color: rgb(130, 140, 148);
  margin: 0px 0px 14.5px;
`;
const initialInput = {
  description: "",
  profile: null,
  deskImg: null,
  itemInfo: [],
};
const initialItemInfo = {};

export const InputFile = ({}) => {
  const [itemTags, setItemTags] = useState([]);
  const fileUpload = useRef();
  const [fileUrl, setFileUrl] = useState(null);
  const [input, setInput] = useState(initialInput);
  const [axisPosition, setAxisPosition] = useState(initialItemInfo);
  const options = {
    maxSizeMB: 0.8,
    maxWidthOrHeight: 1700,
    useWebWorker: true,
  };
  const [componentRef, size] = useComponentSize(fileUrl);
  const width = componentRef.current?.clientWidth ?? 0;
  const height = componentRef.current?.clientHeight ?? 0;
  const onChangeImage = async (e) => {
    const imageFile = e.target.files[0];

    try {
      const compressedFile = await imageCompression(imageFile, options);
      const imageUrl = URL.createObjectURL(compressedFile);

      setFileUrl(imageUrl);
      setInput({ ...input, deskImg: compressedFile });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    return () => {};
  }, [setItemTags]);

  return (
    <>
      {fileUrl ? (
        <>
          <DraggableButtonInCard
            fileUrl={fileUrl}
            setInput={setInput}
            input={input}
          />
          {/* <ImageSetting ref={componentRef}>
            <img src={fileUrl} width="100%" />

            <DraggablePoint
              fileUrl={fileUrl}
              width={width}
              height={height}
              setAxisPosition={setAxisPosition}
              axisPosition={axisPosition}
              // id={id}
              // itemId={itemId}
            />
          </ImageSetting> */}
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              width: "430px",
              height: "430px",
              backgroundColor: "#f7f9fa",
              margin: "10px",
            }}
          >
            <InputFileLayout>
              {" "}
              <Camera>
                <MdPhotoCamera />
              </Camera>
              <p className="bigText">사진을 끌어다놓아요 </p>
              <p className="smallText">1장만 업로드가 가능해요.</p>
              {/* <input class="upload-name" value="첨부파일" placeholder="첨부파일" /> */}
              <label for="file" className="pcload">
                PC에서 불러오기
              </label>
              <input
                type="file"
                id="file"
                ref={fileUpload}
                onChange={onChangeImage}
              />
            </InputFileLayout>
          </div>
        </>
      )}

      <TextBox>
        <textarea
          type="text"
          name="description"
          placeholder="어떤 사진인지 짧은 소개로 시작해보세요."
        />
      </TextBox>
    </>
  );
};