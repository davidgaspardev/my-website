import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { Box } from "./base/Box";

/**
 * Header
 * 
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
    const { asPath } = useRouter();

    useEffect(() => {
        const header = document.getElementById("header-main");
        if (header) {

            

            window.onscroll = headerScroll(header);
        }
    }, []);

    return (
        <HeaderStyled id="header-main">
            <div className="header-info">
            </div>
            <div className="header-content">

                <Image src="/static/images/svg/logo.svg" width={45} height={45} />

                <nav>
                    <ul>
                        {
                            [ "about", "projects", "posts" ].map((link, index) => {
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
            </div>
        </HeaderStyled>
    );
}

function headerScroll(header: HTMLElement) {
    return () => {
        const headerTop = Number.parseInt(getComputedStyle(header).top);
        const verticalScroll = window.scrollY;
        if (verticalScroll >= 0 && verticalScroll <= 40) {
            header.style.top = `${-Math.abs(verticalScroll)}px`;
        } else if (headerTop !== -40) {
            header.style.top = `-40px`;
        }
    }
}

const HeaderStyled = styled.header`
    width: 100vw;
    height: 100px;
    box-shadow: 0px 0px 16px rgba(0,0,0,.15);
    transaction: top ease 250ms;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;

    .header-info {
        background-color: #4EB7AA;
        width: 100%;
        height: 40px;
    }

    .header-content {
        background: white;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

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
        }

        a:hover {
            background: #EDEDED;
        }

        a.selected {
            opacity: 1;
            color: var(--color-primary);
        }
    }
`;