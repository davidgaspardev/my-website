import styled from "styled-components";
import { Box } from "./base/Box";

const HeaderStyled = styled.header`
    width: 100vw;
    height: 60px;
    background-color: var(--color-secondary);
    box-shadow: 0px 0px 10px grey;

    nav > ul {
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    nav > ul > li {
        padding: 10px 20px;
        border: 1px solid red;
    }
`;

/**
 * Header
 * 
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
    return (
        <HeaderStyled>
            <Box
                m={[10, 25, 10, 25]}>

                <nav>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </Box>
        </HeaderStyled>
    );
}