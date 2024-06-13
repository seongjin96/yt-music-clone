interface ChannelPageProps {
  params: {
    id: string;
  }
}

const page = (props: ChannelPageProps) => {
  console.log(props);
  return <div>channel/[{props.params.id}]</div>;
}

export default page;