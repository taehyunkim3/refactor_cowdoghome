import { CircleImage } from "../../../../components";
import kwoo from "../../components/kwoo/kwooo.png";
import {
  Image,
  BannerContainer,
  TextContainer,
  BannerText,
  ProfileContainer,
  ProfileName,
} from "./style";

export const MainBannerView = ({ imageUrl }) => {
  return (
    <BannerContainer>
      <Image src={imageUrl} alt="mainImage" />
      <TextContainer>
        <BannerText>
          운 좋게 당첨된 청약! 2년 반 기다려서 들어간 32평 보금자리 🏠
        </BannerText>
        <ProfileContainer>
          <CircleImage type="profile" size="36px" imageUrl={kwoo} />
          <ProfileName>하루쨩</ProfileName>
        </ProfileContainer>
      </TextContainer>
    </BannerContainer>
  );
};
