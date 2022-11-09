import styled from "styled-components";
import FloatingHeader from "../../components/FloatingHeader";
import Image from "next/image";

const aboutMe = `
Sou uma pessoa tranquila e sonhadora, gosto de desenvolver coisas novas e contribuir em projeto legais, paixanado pelo desenvolvimento de software quero sempre evoluir como profissional.

Essa minha paixão surgiu quando eu tinha 15 anos, conheci um pessoa, nós estudávamos junto na Enseada do Brito em Palhoça e acabamos virado amigos, ele me mostrou um aplicativo para Android que ele
estava desenvolvendo, não lembro os detalhes mas era uma simples lista de tarefas, olhando esse aplicativo eu tinha ficado fascinado, algo tão simples para mim hoje em dia, mas naquela época era como se fosse magia.
`;

export default function AboutPage(): JSX.Element {
	return (
		<AboutPageStyled>
			<FloatingHeader />

			<div className="about-image">
				<Image
					src="https://media-exp1.licdn.com/dms/image/C4E03AQFn0CFKP0LMCw/profile-displayphoto-shrink_200_200/0/1634069200512?e=1673481600&v=beta&t=Pz1Wi5F8t0Wrz08PV3GQ-4Gm5WMLhbQUKsn_vYVgIkc"
					width={250}
					height={250}
				/>
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
	height: 100vh;

	.about-image {
		width: 300px;

		img {
			border-radius: 10px;
		}
	}

	.about-content {
		width: calc(500px - 32px);
		padding: 16px;

		h1 {
			margin-bottom: 16px;
		}
	}
`;
