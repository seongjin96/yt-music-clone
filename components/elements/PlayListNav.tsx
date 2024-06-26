"use client"

import {NextPage} from "next";
import { IoMdPlayCircle } from "react-icons/io";
import {Playlist} from "@/types";
import usePlayerState from "@/hooks/usePlayerState";

const PlayListNav: NextPage<{playlist: Playlist}> = ({ playlist }) => {
  const { addSongList } = usePlayerState();
  const onClickPlay = () => {
    addSongList(playlist.songList);
  }

  return (
    <li className="mx-3 px-4 flex flex-row justify-between items-center
    hover:bg-neutral-700 rounded-lg group
    ">
      <div>
        <div className="text-[14px]">{playlist.playlistName}</div>
        <div className='text-[12px] text-neutral-500'>{playlist.owner}</div>
      </div>
      <div>
        <div onClick={onClickPlay} className="hidden group-hover:block cursor-pointer">
          <IoMdPlayCircle size={30}/>
        </div>
      </div>
    </li>
  );
}

export default PlayListNav;