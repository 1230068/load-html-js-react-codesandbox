import { useState, useEffect } from "react";

// urlのhtmlをロード
export const useLoadHtml = (
  refElement: React.MutableRefObject<null | HTMLElement>,
  url: string
): boolean => {
  const [loaded, setLoaded] = useState(false);
  const [html, setHtml] = useState("");

  // ロード
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((HTML) => {
        setHtml(HTML);
      });
  }, [url]);

  // 流し込み
  useEffect(() => {
    if (!refElement.current) return;
    refElement.current.innerHTML = html;
    setLoaded(true);
  }, [refElement, html]);

  // 完了したらtrueを返す
  return loaded;
};
