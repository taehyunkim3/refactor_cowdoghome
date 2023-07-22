import { ProfileImageLayer } from "./style";
/***
 * @param {string} size - 프로필 이미지 크기
 * @param {string} imageUrl - 프로필 이미지 url
 */
export const CircleImage = ({
  type = "prifile",
  size = "70px",
  imageUrl = "./defaultProfile.png",
}) => {
  return (
    <>
      <ProfileImageLayer size={size}>
        <img src={imageUrl} alt="profileImage" />
      </ProfileImageLayer>
    </>
  );
};
