import {
  CompanyInfoBox,
  CompanyInfoText,
  ContentBox,
  FooterBox,
  FooterContent,
  MainContent,
  Number,
  PageContainer,
  Text,
  Title,
  companyInfoStyle,
  contentBoxStyle,
} from "./style";

export const Footer = ({ children }) => {
  return (
    <PageContainer>
      <MainContent>{children}</MainContent>
      <FooterBox>
        <FooterContent>
          <ContentBox>
            <Title>고객센터 » </Title>
            <div>
              <Number>1670-0876</Number>
              <Text>09:00~18:00</Text>
            </div>
            <Text>평일: 전체 문의 상담 가능</Text>
            <Text>
              주말, 공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능
            </Text>
          </ContentBox>
          <ContentBox style={contentBoxStyle}>
            <Text>회사소개</Text>
            <Text>채용정보</Text>
            <Text>이용약관</Text>
            <Text>
              <b>개인정보 처리방침</b>
            </Text>
            <Text>공지사항</Text>
            <Text>안전거래센터</Text>
          </ContentBox>
          <ContentBox style={contentBoxStyle}>
            <Text>입점신청</Text>
            <Text>제휴/광고 문의</Text>
            <Text>사업자 구매 회원</Text>
            <Text>시공파트너 안내</Text>
            <Text>상품광고 소개</Text>
            <Text>고객의 소리</Text>
          </ContentBox>
          <CompanyInfoBox>
            <CompanyInfoText>
              (주)버킷플레이스 | 대표이사 이승재 | 서울 서초구 서초대로74길 4
              삼성생명서초타워 25층, 27층 | contact@bucketplace.net |
              사업자등록번호 119-86-91245 <b>사업자정보확인</b>
            </CompanyInfoText>
            <CompanyInfoText>
              통신판매업신고번호 제2018-서울서초-0580호
            </CompanyInfoText>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src="https://assets.ohou.se/design-system/8f5b2c2e98ea1196.png"
                width="32"
                height="32"
                alt="isms 인증 마크"
              />
              <CompanyInfoText>
                소개집 서비스 운영
                <br />
                2023.09.21~
              </CompanyInfoText>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src="https://assets.ohou.se/design-system/d5fb816a58bb6a06.png"
                  width="32"
                  height="32"
                  alt="iso27001 인증 마크"
                />
                <CompanyInfoText style={companyInfoStyle}>
                  고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을
                  체결하여 안전거래를 보장하고 있습니다.
                  <b>서비스가입사실확인</b>
                </CompanyInfoText>
              </div>
            </div>
            <CompanyInfoText>
              (주)버킷플레이스는 통신판맴중개자로 거래 당사자가 아니므로,
              판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.
              단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서
              책임을 부담합니다.
            </CompanyInfoText>
          </CompanyInfoBox>
        </FooterContent>
      </FooterBox>
    </PageContainer>
  );
};
