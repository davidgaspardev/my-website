import Footer from "../components/Footer";
import { skills } from "../helpers/data/skills";
import SkillCard from "../components/SkillCard";
import { allHexsFromOneByte } from "../helpers/utils/hex";
import { randomColor, randomIntBetween } from "../helpers/utils/random";
import Layout from "../components/Layout";

/**
 * Home Page
 *
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  // Return component
  return (
    <>
      <IntroMe />
      <SkillCardList />
    </>
  );
}

function IntroMe(): JSX.Element {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 h-screen">
      {Array.from({ length: 32 }).map((_, index) => (
        <div key={index} className="flex items-center justify-center">
          <h2
            className="font-fira-code opacity-50 md:opacity-80 font-bold text-green-"
            style={{
              color: randomColor(
                "#12bca8ff",
                "#10ad9bff",
                "#0e9d8dff",
                "#097e71ff",
                "#055f56ff",
                "#04584Fff",
                "#035048ff",
                "#00403aff"
              ),
            }}
          >
            <span className="opacity-50 text-sm">0x</span>
            {allHexsFromOneByte[randomIntBetween(0, 255)]}
          </h2>
        </div>
      ))}

      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl bg-gradient-to-r font-league-spartan from-green-200 to-green-800 bg-clip-text text-transparent">
          Hi, I{"'"}m <span className="font-bold">David Gaspar</span>
        </h1>
        <h3 className="font-bold font-league-spartan text-green-300 text-xl pt-2">
          Software Developer
        </h3>
      </div>
    </div>
  );
}

function SkillCardList(): JSX.Element {
  return (
    <div className="py-4">
      <div className="max-w-[1000px] m-auto">
        <div className="w-full flex flex-row items-center p-4">
          <div className="flex-1 h-[2px] bg-green-800/5"></div>
          <h2 className="text-green-600 px-4 font-league-spartan font-bold text-2xl">
            My favorite <span className="text-green-300">skills</span>
          </h2>
          <div className="flex-1 h-[2px] bg-green-800/5"></div>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <SkillCard key={index} data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
