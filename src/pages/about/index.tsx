import styled from "styled-components";
import FloatingHeader from "../../components/FloatingHeader";
const aboutMe = `
Irei falar um pouco sobre mim, quando eu tinha 15 anos conheci um pessoa, nós estudavamos junto na Enseada do Brito em Palhoça e acabos virado amigos, ele me mostrou um aplicativo para celular que ele
estava desenvolvendo, não lembro os destalhes mas era uma lista TODO, mas sei que fiquei fascinado por aquilo, algo tão simples para mim hoje em dia, mas naquela época era como se fosse magia.
`;

export default function AboutPage(): JSX.Element {

    return (
        <AboutPageStyled>

            <FloatingHeader />

            <div className="about-image">

            </div>
            <div className="about-content">
                <h1>Olá, eu sou David Gaspar</h1>
                <p>{aboutMe}</p>
            </div>
        </AboutPageStyled>
    );
}

const AboutPageStyled = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .about-image {
        width: 300px;
    }

    .about-content {
        width: 500px;
    }
`;