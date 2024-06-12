"use client"

import {cn} from "@/lib/utils";
import React from "react";
import {PlayButtonProps} from "@/types";

const DarkButton: React.FC<PlayButtonProps> = ({ Icon, label, className, ...props }) => {
  return (
    <div className={cn(
      "cursor-pointer border border-neutral-700 bg-black hover:bg-neutral-700 text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
      className
    )}
         {...props}
    >
      <span><Icon /></span>
      <span>{label}</span>
    </div>
  );
}

export default DarkButton;