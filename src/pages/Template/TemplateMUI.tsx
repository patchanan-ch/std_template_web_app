import { useEffect } from "react";

export const TemplateMUI = () => {
  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const url = baseUrl.endsWith('/')
      ? `${window.location.origin}${baseUrl}TemplateMUI`
      : `${window.location.origin}${baseUrl}/TemplateMUI`;
    window.open(url, "_blank");
  }, []);

  return <></>;
};
