import { useEffect, useState } from "react";

export const useShorten = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("shorten-history")) || []
  );
  const [error, setError] = useState("");

  const changeFullUrl = (value) => {
    setFullUrl(value);
  };

  useEffect(() => {
    const getShortUrl = async () => {
      if (!fullUrl) return;

      const proxyUrl = "https://corsproxy.io/?";
      const url = `https://ulvis.net/API/write/get?url=${fullUrl}`;

      const res = await fetch(`${proxyUrl}${encodeURIComponent(url)}`);

      const data = await res.json();
      if (data.success) {
        setHistory((prev) => [...prev, data]);
      } else {
        setError(data.error.msg);
      }
      console.log(data);
    };

    getShortUrl();
  }, [fullUrl]);

  useEffect(() => {
    localStorage.setItem("shorten-history", JSON.stringify(history));
  }, [history]);

  return {
    history,
    error,
    changeFullUrl,
  };
};
