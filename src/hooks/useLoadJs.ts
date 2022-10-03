import { useState, useEffect } from "react";

// urlのJSをロード
export const useLoadJs = (url: string): boolean => {
  const [loaded, setLoaded] = useState(false);

  // scriptタグをappendChild
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    setLoaded(true);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  // 完了したらtrueを返す
  return loaded;
};
