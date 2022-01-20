import styled from "styled-components";
import Image from "next/image";
import { Flex } from "./base/Flex";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavLink } from "../helpers/types";
import { useState, useEffect } from "react";
import { links } from "../helpers/data/links";

export default function FloatingHeader() {
    const { asPath } = useRouter();

    const [ hasMenu, showMenu ] = useState(false);

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

                <div className="menu-button children-center">
                    <Image
                        src={`/static/images/svg/menu-${hasMenu ? "close" : "open"}.svg`}
                        width={35}
                        height={35}
                        onClick={() => showMenu(!hasMenu)}/>
                </div>

                {hasMenu && (
                    <nav className="menu children-center">
                        <ul>
                            {
                                links.map((link, index) => {
                                    const { path, name } = link;
                                    const selected = asPath.indexOf(path) === 1;

                                    return (
                                        <li key={index}>
                                            <Link href={`/${path}`}>
                                                <a className={selected ? "selected" : undefined}>
                                                    {name}
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                )}
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
        position: relative;
        box-shadow: 0px 0px 20px #00000015;
        border-radius: 10px;
        background: linear-gradient(45deg, var(--color-keppel), var(--color-rich-black));

        .logo, .menu-button {
            margin: 0px 20px;
            cursor: pointer;
            transition: ease transform 500ms;

            &:hover {
                transform: scale(1.05);
            }
        }

        .menu {
            position: absolute;
            top: 68px;
            right: 0;
            width: 150px;
            padding: 10px 0;
            border-radius: 10px;
            background-color: var(--color-pine-green);

            ul {
                list-style: none;
            }
        
            a {
                width: 150px;
                padding: 10px;
                cursor: pointer;
                color: white;
                display: block;

                &:hover {
                    background-color: #FFFFFF16;
                }
            }
        }
    }
`;