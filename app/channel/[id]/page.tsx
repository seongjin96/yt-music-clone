import {getChannelById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";
import {Channel, Song} from "@/types";
import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import {getRandomElementFromArray} from "@/lib/utils";
import DarkButton from "@/components/elements/DarkButton";
import {FiMusic, FiShuffle} from "react-icons/fi";
import WhiteButton from "@/components/elements/WhiteButton";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import PlayListCarousel from "@/components/PlayListCarousel";
import ChannelHead from "@/app/channel/components/ChannelHead";

interface ChannelPageProps {
  params: {
    id: number;
  }
}

const page = async (props: ChannelPageProps) => {
  const channel: Channel = await getChannelById(Number(props.params.id));

  if(!channel) permanentRedirect('/');

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc}/>
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel}/>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-20px">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song: Song, key: number) => {
              return <SongCardRowExpand song={song} key={key} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>
        <PlayListCarousel
          playlistArray={channel.playlistArray}
        />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
}

export default page;