import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";
import {dummyGenreList, getAllPlaylist, getSongListTop10} from "@/lib/dummyData";
import {Playlist, TopSong} from "@/types";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";

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
      <SongListCarousel songListTop10={songListTop10} title="인기곡"/>
      <div className="mt-20"></div>
      <GenreListCarousel genreList={dummyGenreList} title="분위기 및 장르" />
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
}

export default page;