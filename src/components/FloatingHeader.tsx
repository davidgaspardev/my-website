import styled from "styled-components";
import Image from "next/image";
import { Flex } from "./base/Flex";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavLink } from "../helpers/types";
import { useState, useEffect } from "react";
import { links } from "../helpers/data/links";

/**
 * Floating header
 * 
 * @returns {JSX.Element}
 */
export default function FloatingHeader(): JSX.Element {
    const { asPath } = useRouter();

    const [ hasMenu, showMenu ] = useState(false);

    useEffect(() => {
        const menuButton = document.getElementById("menu-button")!;
        const menuList = document.getElementById("menu-list")!;

        let menuAnimBlock = false;

        menuButton.onclick = () => {
            if(!menuAnimBlock) {
                menuAnimBlock = true;

                if(getComputedStyle(menuList).display === "none") {
                    // Open
                    menuList.style.display = "block";
                    setTimeout(() => {
                        menuList.style.top = "60px";
                        menuList.style.opacity = "1";

                        setTimeout(() => {
                            menuAnimBlock = false;
                        }, 250);
                    }, 50);
                } else {
                    // Close
                    menuList.style.top = "50px";
                    menuList.style.opacity = "0";
    
                    setTimeout(() => {
                        menuList.style.display = "none";
                        menuAnimBlock = false;
                    }, 250);
                }
            }
        }
    }, []);

    return (
        <FloatingHeaderStyled>
            <Flex
                height={50}
                margin="8px"
                flexDirection="row"
                justifyContent="space-between">
                
                <div className="logo children-center">
                    <Link href={process.env.HOST || "/"}>
                        <Image
                            src="/static/images/svg/logo.svg"
                            width={35}
                            height={35}/>
                    </Link>
                </div>

                <div className="menu-button children-center">
                    <Image
                        id="menu-button"
                        src={`/static/images/svg/menu-${hasMenu ? "close" : "open"}.svg`}
                        width={20}
                        height={20}
                        onClick={() => showMenu(!hasMenu)}/>
                </div>

                <nav id="menu-list" className="children-center">
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
            </Flex>
        </FloatingHeaderStyled>
    );
}

const FloatingHeaderStyled = styled.header`
    position: fixed;
    top: 10px;
    max-width: 1000px;
    width: 100%;
    z-index: 100;

    @media(min-width: 1000px) {
        left: calc(50% - 500px);
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

        #menu-list {
            position: absolute;
            top: 50px;
            right: 0;
            width: 150px;
            padding: 10px 0;
            border-radius: 10px;
            background-color: var(--color-pine-green);
            opacity: 0;

            transition: all ease 250ms;

            display: none;

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