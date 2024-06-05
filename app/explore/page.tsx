import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";
import {getAllPlaylist, getSongListTop10} from "@/lib/dummyData";
import {Playlist, Song, TopSong} from "@/types";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";

const page = async () => {

  const [playlistArray, songListTop10]: [Playlist[], TopSong[]] = await Promise.all([
    getAllPlaylist(), getSongListTop10()
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category/>
      <div className="mt-20"></div>
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글"/>
      <div className="mt-20"></div>
      <SongListCarousel songListTop10={songListTop10} title="새 앨범 및 싱글"/>
    </PagePadding>
  );
}

export default page;