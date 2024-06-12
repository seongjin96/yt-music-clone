"use client"

import IconButton from "@/components/elements/IconButton";
import {FiFolderPlus, FiMoreVertical, FiPlay} from "react-icons/fi";
import {getRandomElementFromArray} from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {Playlist} from "@/types";
import WhiteButton from "@/components/elements/WhiteButton";
import DarkButton from "@/components/elements/DarkButton";

const PlayListHead: React.FC<Playlist> = ({ owner, playlistName, songList }) => {
  const randomSong = getRandomElementFromArray(songList);

  return (
    <section>
      <div className="flex gap-[50px] flex-row">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc}/>
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범ㆍ${owner}ㆍ2019`}</div>
            <div>{`${songList.length}곡ㆍ15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton
              className={"w-[85px] text-[14px]"}
              Icon={FiPlay}
              label="재생"
            />
            <DarkButton
              className={"w-[150px] text-[14px]"}
              Icon={FiFolderPlus}
              label="보관함에 저장"
            />
            <IconButton icon={<FiMoreVertical size={24}/>}/>
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          className={"w-[85px] text-[14px]"}
          Icon={FiPlay}
          label="재생"
        />
        <DarkButton
          className={"w-[150px] text-[14px]"}
          Icon={FiFolderPlus}
          label="보관함에 저장"
        />
        <IconButton icon={<FiMoreVertical size={24}/>}/>
      </ul>
    </section>
  );
}

export default PlayListHead;