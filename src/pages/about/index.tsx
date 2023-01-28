import Image from "next/image";
import { styled } from "../../components";
import AppBar from "../../components/v2/AppBar";

const aboutMe = `
Sou uma pessoa introvertida e espontânea, sem jargões ou segundas intenções. Mesmo me retraindo perante as pessoas, não deixo isso me limitar socialmente por muito tempo, e no cenário de trabalho faço questão de não deixar isso me prejudicar.
<br/><br/>
Minha paixão é desenvolver novas "coisas" e contribuir em projetos interessantes. Desde 2015, tenho um grande interesse pelo desenvolvimento de software e procuro sempre evoluir como profissional.
<br/><br/>
Essa paixão teve um gatilho, um amigo do ensino fundamental. Para essa virada de chave acontecer comigo é graça a essa pessoal, que desejo muito sucesso e que alias já possui muito sucesso.
`;

export default function AboutPage(): JSX.Element {
	return (
		<AboutPageContainer>
			<AppBar />

			<ImageWrapper>
				<Image
					src="https://media-exp1.licdn.com/dms/image/C4E03AQFn0CFKP0LMCw/profile-displayphoto-shrink_200_200/0/1634069200512?e=1673481600&v=beta&t=Pz1Wi5F8t0Wrz08PV3GQ-4Gm5WMLhbQUKsn_vYVgIkc"
					width={250}
					height={250}
					alt="Me"
				/>
			</ImageWrapper>

			<Content>
				<h1>Olá, meu nome é David Gaspar</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: aboutMe,
					}}
				/>
			</Content>
		</AboutPageContainer>
	);
}

const AboutPageContainer = styled("main", {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",

	alignItems: "center",
	justifyContent: "center",

	minHeight: "100vh",
});

const ImageWrapper = styled("div", {
	width: 300,

	img: {
		borderRadius: "$3",
	},
});

const Content = styled("div", {
	width: "calc(550px - ($3 * 2))",
	padding: "$3",

	h1: {
		marginBottom: "$3",
	},
});
