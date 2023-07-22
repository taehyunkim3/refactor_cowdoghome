import { Button, Selector } from "./components";
import "./reset.css";
import { GlobalStyle } from "./style/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Selector
        title="선택"
        options={[
          "피그먼트 모듈 소파 3인용(1,280,000원)",
          "피그먼트 모듈 소파 4인용(1,780,000원)",
          "피그먼트 모듈 소파 코너형 6인용(2,380,000원)",
          "피그먼트 모듈 소파 3인용 코너형(1,880,000원)",
        ]}
        focus
      ></Selector>
      <br />
      <Selector
        title="선택"
        options={[
          "피그먼트 모듈 소파 3인용(1,280,000원)",
          "피그먼트 모듈 소파 4인용(1,780,000원)",
          "피그먼트 모듈 소파 코너형 6인용(2,380,000원)",
          "피그먼트 모듈 소파 3인용 코너형(1,880,000원)",
        ]}
      ></Selector>

      {/* <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Button label="test" theme="filled" size="small" />
        </div>
        <div style={{ flex: 1 }}>
          <Button label="test" theme="empty" size="small" b />
        </div>
        <div style={{ flex: 1 }}>
          <Button label="test" theme="gray" size="large" />
        </div>
      </div> */}
    </>
  );
};
