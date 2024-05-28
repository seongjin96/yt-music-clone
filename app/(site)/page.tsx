import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";
import {Playlist} from "@/types";

const page = async () => {
  const dummyPlaylistArray1: Playlist[] = [...dummyPlaylistArray];
  const dummyPlaylistArray2: Playlist[] = [await getPlaylistById(1)];
  const dummyPlaylistArray3: Playlist[] = [await getPlaylistById(2)];
  const dummyPlaylistArray4: Playlist[] = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category/>
        <div className="mt-12"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={"lg"}/>
            </div>
          }
          title="다시 듣기"
          subTitle="성진"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          title="커뮤니티 제공"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          title="커버 및 리믹스"
        />
      </div>
    </PagePadding>
  );
};

export default page;