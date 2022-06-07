import styled from 'styled-components';
import { Flex } from '../components/base/Flex';
import FloatingHeader from '../components/FloatingHeader';
import Header from '../components/Header';
import Skill from '../components/Skill';
import { skills } from '../helpers/data/skills';

/**
 * Home Page
 * 
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {

  // Return component
  return (
    <HomePageStyled>
      <FloatingHeader />

      <div className="banner children-center">
          <h1>Hi, I'm <span>David Gaspar</span></h1>
          <h2>Software Developer</h2>
      </div>

      <div className="my-skills">
        <h4>My favorites skills</h4>
        <Flex
          flexWrap="wrap"
          justifyContent="center">  
          {
            skills.map((skill, index) => <Skill key={index} data={skill} />)
          }
        </Flex>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.main`
    width: 100%;
    min-height: 100vh;

    .banner {
      width: 100%;
      height: 60vh;

      h1 {
        font-size: 42pt;
        background: linear-gradient(45deg, var(--color-keppel), var(--color-rich-black));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        span {
          font-weight: 800;
        }
      }

      h2 {
        font-size: 24pt;
        color: #5ACBBD;
      }
      
    }

    .my-skills {
      max-width: 900px;
      width: 100%;
      margin: 0px auto;

      h4 {
        padding: 0px 10px;
      }
    }
`;
