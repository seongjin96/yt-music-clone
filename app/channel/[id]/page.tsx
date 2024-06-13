import {getChannelById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";
import {Channel} from "@/types";
import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import {getRandomElementFromArray} from "@/lib/utils";

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
    </PagePadding>
  );
}

export default page;