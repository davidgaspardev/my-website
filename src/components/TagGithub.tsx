import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

type Props = {
    href: string;
};

/**
 * Tag Github
 * 
 * @returns {JSX.Element}
 */
export default function TagGithub(props: Props): JSX.Element {
    const { href } = props;

    return (
        <TagGithubContainer>
            <Link href={href}>
                <Image
                    src="/static/images/svg/icon-github-fixed.svg"
                    width={75}
                    height={75}/>
            </Link>
        </TagGithubContainer>
    );
}

const TagGithubContainer = styled.span`
    position: fixed;
    top: auto;
    right: 0;
    bottom: -5px;
    transform: rotate(90deg);
    z-index: 100;

    @media(min-width: 1100px) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: auto;
        transform: rotate(0deg);
    }

    img {
        cursor: pointer;
    }
`;