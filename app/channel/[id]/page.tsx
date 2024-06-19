import {getChannelById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";
import {Channel} from "@/types";
import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import {getRandomElementFromArray} from "@/lib/utils";
import DarkButton from "@/components/elements/DarkButton";
import {FiMusic, FiShuffle} from "react-icons/fi";
import WhiteButton from "@/components/elements/WhiteButton";

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
      <section>
        <div className="text-[28px] font-bold">{channel.name}</div>
        <article className="mt-4 lg:hidden">
          <div>
            <DarkButton
              className={"w-[230px] flex justify-center"}
              label={"구독중 4.18만"}
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton
              label={"셔플"}
              Icon={<FiShuffle size={16}/>}
            />
            <WhiteButton
              label={"뮤직 스테이션"}
              Icon={<FiMusic size={16} />}
            />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton
            label={"셔플"}
            Icon={<FiShuffle size={16}/>}
          />
          <WhiteButton
            label={"뮤직 스테이션"}
            Icon={<FiMusic size={16} />}
          />
          <DarkButton
            className={"w-[230px] flex justify-center"}
            label={"구독중 4.18만"}
          />
        </div>
      </section>
      <section>
        노래
      </section>
      <section>
        앨범
      </section>
    </PagePadding>
  );
}

export default page;