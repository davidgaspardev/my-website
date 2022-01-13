import styled from "styled-components";
import Image from "next/image";
import { Flex } from "./base/Flex";
import { useRouter } from "next/router";
import Link from "next/link";

export default function FloatingHeader() {
    const { asPath } = useRouter();

    return (
        <FloatingHeaderStyled>
            <Flex
                height={60}
                margin="8px"
                flexDirection="row"
                justifyContent="space-between">
                
                <div className="logo children-center">
                    <Link href={process.env.HOST || "/"}>
                        <Image
                            src="/static/images/svg/logo.svg"
                            width={45}
                            height={45}/>
                    </Link>
                </div>


                <nav className="children-center">
                    <ul>
                        {
                            [ "about" ].map((link, index) => {
                                const selected = asPath.indexOf(link) === 1;

                                return (
                                    <li key={index}>
                                        <Link href={`/${link}`}>
                                            <a className={selected ? "selected" : undefined} >{link}</a>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </Flex>
        </FloatingHeaderStyled>
    );
}

const FloatingHeaderStyled = styled.header`
    position: fixed;
    top: 10px;
    max-width: 800px;
    width: 100%;
    z-index: 100;

    @media(min-width: 800px) {
        left: calc(50% - 400px);
    }

    > div {
        box-shadow: 0px 0px 20px #00000015;
        border-radius: 10px;
        background-color: #DDF7F5;

        .logo {
            margin: 0px 20px;
        }

        nav {
            height: 100%;
    
            ul {
                list-style: none;
                display: flex;
                flex-direction: row;
            }
        
            a {
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 4px;
                opacity: 0.5;
                color: var(--color-secondary);
                display: block;
            }
        }
    }
`;