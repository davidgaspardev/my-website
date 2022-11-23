import Image from "next/image";
import { styled } from "../../components";
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
				<h1>Olá, eu sou David Gaspar</h1>
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
	width: "calc(500px - ($3 * 2))",
	padding: "$3",

	h1: {
		marginBottom: "$3",
	},
});
