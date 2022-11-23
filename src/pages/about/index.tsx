import styled from "styled-components";
import Image from "next/image";
import AppBar from "../../components/v2/AppBar";

const aboutMe = `
Sou uma pessoa colaborativa em querer fazer parte de algo maior, e curiosa para fomentar novos conhecimento ou inovação.
<br/><br/>
Amo desenvolver coisas novas e contribuir em projeto legais, apaixonado pelo desenvolvimento de software desde de 2015, busco sempre evoluir como profissional.
<br/><br/>
Programo desde dos 16 anos quando conheci uma pessoa, nós estudávamos junto no fundamental e acabamos virando amigos. Ele me mostrou um aplicativo para Android que ele estava desenvolvendo, não lembro os detalhes mas acho que era uma simples lista de tarefas, e a partir dai fiquei fascinado pelo muito de tecnologia. 💜
`;

export default function AboutPage(): JSX.Element {
	return (
		<AboutPageStyled>
			<AppBar />

			<div className="about-image">
				<Image
					src="https://media-exp1.licdn.com/dms/image/C4E03AQFn0CFKP0LMCw/profile-displayphoto-shrink_200_200/0/1634069200512?e=1673481600&v=beta&t=Pz1Wi5F8t0Wrz08PV3GQ-4Gm5WMLhbQUKsn_vYVgIkc"
					width={250}
					height={250}
					alt="Me"
				/>
			</div>
			<div className="about-content">
				<h1>Olá, eu sou David Gaspar</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: aboutMe,
					}}
				/>
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
