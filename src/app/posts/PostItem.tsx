import { format } from "date-fns";
import Image from "next/image";
import { PostMetadata } from "../../helpers/types";

type PostProps = {
  onClick: () => void;
  data: PostMetadata;
};

export default function PostItem(props: PostProps): JSX.Element {
  const { onClick, data } = props;
  return (
    <div
      onClick={onClick}
      className="m-w-[750px] w-full m-1 px-2 py-4 rounded hover:bg-green-100/5 cursor-pointer"
    >
      <div className="grid grid-cols-4 gap-1 text-sm">
        <Author {...data} />

        <Time {...data} />

        <Title {...data} />

        <Description {...data} />

        <Labels {...data} />
      </div>
    </div>
  );
}

function Title(data: PostMetadata) {
  return (
    <div className="col-span-4 text-xl font-bold text-green-800">
      <h1>{data.title}</h1>
    </div>
  );
}

function Description(data: PostMetadata) {
  return (
    <div className="col-span-4 text-sm p-1">
      <p>{data.excerpt}</p>
    </div>
  );
}

function Time(data: PostMetadata) {
  return (
    <div className="col-span-2 flex flex-col items-end justify-center pr-1 md:items-start">
      <h4 className="text-xs opacity-40">
        {format(new Date(data.date), "dd/MM/yyyy")}
      </h4>
    </div>
  );
}

function Author(data: PostMetadata) {
  return (
    <div className="col-span-2 md:h-10 flex flex-row gap-2 items-center md:col-span-1 md:row-start-4">
      <Image
        className="rounded"
        src={data.author.picture}
        width={24}
        height={24}
        alt="Authro picture"
      />
      <h4 className="opacity-70">{data.author.name}</h4>
    </div>
  );
}

function Labels(data: PostMetadata) {
  return (
    <div className="col-span-4 flex flex-row-reverse items-center md:col-span-3 gap-2">
      {data.labels &&
        data.labels.map((label, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded bg-green-800/10 text-green-800"
          >
            {label}
          </span>
        ))}
    </div>
  );
}
