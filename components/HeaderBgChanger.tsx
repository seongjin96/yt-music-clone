"use client";

import useUIState from "@/hooks/useUIState";
import {useEffect} from "react";

const HeaderBgChanger = ({ imageSrc }: { imageSrc: string }) => {
  // @ts-ignore
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc])

  return <div></div>;
}

export default HeaderBgChanger;