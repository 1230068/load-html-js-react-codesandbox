import { useRef } from "react";
import { useLoadHtml } from "./hooks/useLoadHtml";
import { useLoadJs } from "./hooks/useLoadJs";
import "./styles.css";

export default function App() {
  // htmlロード
  const refElm: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
  const isHtmlLoaded: boolean = useLoadHtml(refElm, "./esi.htm");
  // jsロード
  const isJsLoaded: boolean = useLoadJs("./script.js");

  const xClick = (): void => {
    window.hoge();
  };

  return (
    <div className="App">
      <button onClick={xClick}>今日の日付は？（Reactから実行）</button>
      <div
        ref={refElm}
        style={
          isHtmlLoaded && isJsLoaded
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>
    </div>
  );
}
