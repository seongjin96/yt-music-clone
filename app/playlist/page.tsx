import React from "react";
import {getPlaylistById} from "@/lib/dummyData";
import {Playlist} from "@/types";
import {permanentRedirect} from "next/navigation";
import {getRandomElementFromArray} from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";

interface PlaylistPageProps {
  searchParams: {
    list: string;
  }
}

const page = async (props: PlaylistPageProps) => {
  const playlist: Playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) permanentRedirect('/');

  const imageSrc: string = getRandomElementFromArray(playlist.songList)?.imageSrc;

  return (
    <div>
      <HeaderBgChanger imageSrc={imageSrc}/>
    </div>
  );
}

export default page;