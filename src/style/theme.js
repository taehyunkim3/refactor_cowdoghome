const deviceSizes = {
  mobile: "768px",
  laptop: "1024px",
  desktop: "1256px",
};

const colors = {
  mainColor: "#35c5f0",
};

const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.laptop})`,
  laptop: `screen and (min-width: ${deviceSizes.desktop})`,
};

export const theme = {
  colors,
  device,
};

// 반응형
// @media ${({ theme }) => theme.device.desktop} {
//   flex-direction: column;
//   font-size: ${({ theme }) => theme.fontSizes.paragraph};
// }

// 색상
// const MainText = styled.div`
//   color: ${props => props.theme.mainColor};
// `
