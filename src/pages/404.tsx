import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function NotFound() {
	return (
		<NotFoundStyled>
			<div className="logo-panic">
				<Image
					src="/static/images/svg/logo-panic.svg"
					width={350}
					height={350}
				/>
			</div>

			<div className="not-found-content">
				<h1>404 Not Found</h1>
				<h3>Desculpa mas ainda não desenvolvi essa parte.</h3>

				<Link href="/">volta para home</Link>
			</div>
		</NotFoundStyled>
	);
}

const NotFoundStyled = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	justify-content: center;

	.logo-panic {
		width: 350px;
	}

	.not-found-content {
		display: flex;
		flex-direction: column;
	}

	h1,
	h3 {
		font-family: "Hind Siliguri", san-serif;
	}

	h1 {
		color: var(--color-primary);
	}

	h3 {
		color: var(--color-secondary);
		font-weight: normal;
	}

	a {
		align-self: flex-end;
		padding: 8px;
		margin-top: 8px;
		background-color: #f7f7f7;
		border-radius: 5px;
		border: 1px solid var(--color-secondary);
		color: var(--color-primary);
	}
`;
