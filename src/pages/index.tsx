import styled from 'styled-components';
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
      <Header/>

      <div className="my-banner">

      </div>

      <div className="my-skills">
        {
          skills.map((skill, index) => <Skill key={index} data={skill} />)
        }
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.main`
    width: 100%;
    min-height: 100vh;

    .my-banner {
      width: 100%;
      height: 40vh;

      background-color: var(--color-primary);
    }

    .my-skills {
      max-width: 900px;
      width: 100%;
      margin: -50px auto 0px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
`;
