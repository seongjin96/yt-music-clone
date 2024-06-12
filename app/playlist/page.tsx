import React from "react";
import {getPlaylistById} from "@/lib/dummyData";
import {Playlist} from "@/types";
import {permanentRedirect} from "next/navigation";
import {getRandomElementFromArray} from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";

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
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc}/>
      <div className="mt-12"></div>
      <PlayListHead
        id={playlist.id}
        owner={playlist.owner}
        playlistName={playlist.playlistName}
        songList={playlist.songList}
      />
    </PagePadding>
  );
}

export default page;