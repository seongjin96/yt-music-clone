import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";
import {getAllPlaylist} from "@/lib/dummyData";
import {Playlist} from "@/types";
import PlayListCarousel from "@/components/PlayListCarousel";

const page = async () => {

  const playlistArray: Playlist[] = await getAllPlaylist();

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글"/>
    </PagePadding>
  );
}

export default page;