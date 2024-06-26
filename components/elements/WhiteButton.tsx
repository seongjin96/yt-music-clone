"use client"

import {cn} from "@/lib/utils";
import {PlayButtonProps} from "@/types";
import React from "react";

const WhiteButton: React.FC<PlayButtonProps> = ({ Icon, label, className, onClick, ...props }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
      "cursor-pointer bg-white hover:bg-neutral-200 text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
      className
    )}
         {...props}
    >
      <span>{Icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default WhiteButton;