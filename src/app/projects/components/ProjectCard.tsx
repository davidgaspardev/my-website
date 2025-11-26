import { ProjectInfo } from "../../../helpers/types";

interface ProjectCardProps {
  data: ProjectInfo;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { name, description, link, topics, stars, language, homepage } =
    props.data;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[300px] w-full m-1 px-2 py-4 rounded hover:bg-green-100/5 cursor-pointer block"
    >
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between items-center">
          <Language language={language} />
          <Stars stars={stars} />
        </div>

        <Title name={name} />

        <Description description={description} />

        <Topics topics={topics} homepage={homepage} />
      </div>
    </a>
  );
}

function Title({ name }: { name: string }) {
  return (
    <div className="text-xl font-bold text-green-800">
      <h1>{name}</h1>
    </div>
  );
}

function Description({ description }: { description: string }) {
  return (
    <div className="text-sm">
      <p className="line-clamp-3">{description}</p>
    </div>
  );
}

function Stars({ stars }: { stars?: number }) {
  if (stars === undefined) return null;
  return (
    <div className="flex items-center gap-1">
      <h4 className="text-xs opacity-40">⭐ {stars}</h4>
    </div>
  );
}

function Language({ language }: { language?: string }) {
  if (!language) return <div />;
  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="w-3 h-3 rounded-full bg-green-800" />
      <h4 className="opacity-70 text-sm">{language}</h4>
    </div>
  );
}

function Topics({
  topics,
  homepage,
}: {
  topics?: string[];
  homepage?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {topics &&
        topics.slice(0, 3).map((topic, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded bg-green-800/10 text-green-800 text-xs"
          >
            {topic}
          </span>
        ))}
      {homepage && (
        <span className="px-2 py-1 rounded bg-blue-800/10 text-blue-800 text-xs">
          🔗
        </span>
      )}
    </div>
  );
}
