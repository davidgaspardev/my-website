import { ProjectInfo } from "../../../helpers/types";

interface ProjectCardProps {
  data: ProjectInfo;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { name, description, link, topics, stars, language, homepage } = props.data;

  return (
    <div className="border rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow w-[300px]">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-2xl font-bold">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800"
          >
            {name}
          </a>
        </h2>
        {stars !== undefined && (
          <div className="flex items-center gap-1 text-gray-600">
            <span>⭐</span>
            <span>{stars}</span>
          </div>
        )}
      </div>

      <p className="text-gray-700 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 items-center">
        {language && (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
            {language}
          </span>
        )}

        {topics && topics.length > 0 && topics.map((topic, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
          >
            {topic}
          </span>
        ))}

        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-blue-600 hover:underline text-sm"
          >
            🔗 Website
          </a>
        )}
      </div>
    </div>
  );
}
