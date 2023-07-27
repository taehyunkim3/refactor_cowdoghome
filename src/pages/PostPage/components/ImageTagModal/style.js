const { styled } = require("styled-components");

export const StModalCotainer = styled.div`
  background-color: white;
  position: absolute;
  width: 375px;
  min-height: 100px;
  max-height: 450px;
  top: 40px;
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
  border: 1px solid #dddcddff;
`;
