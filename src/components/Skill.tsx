import styled from "styled-components";
import { SkillInfo } from "../helpers/types";
import Image from "next/image";
import { Flex } from "./base/Flex";

type Props = {
    data: SkillInfo;
};

export default function Skill(props: Props) {
    // Destructuring assignment
    const { iconPath, name, description } = props.data;

    return (
        <SkillStyled>
            <Flex
                className="container"
                flexDirection="column">
                <Flex
                    flex={1}
                    alignItems="center"
                    justifyContent="center">
                    <Image src={iconPath} width={75} height={75}/>
                </Flex>
                <h3>{name}</h3>
            </Flex>
        </SkillStyled>
    );
}

const SkillStyled = styled.div`
    width: 180px;
    height: 220px;
    padding: 10px;

    .container {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-image: linear-gradient(#00383A, var(--color-rich-black));

        h3 {
            text-align: center;
            color: white;
            opacity: 0.9;
            padding: 16px;
            letter-spacing: 0.10em;


            //font-family: 'Reem Kufi', sans-serif;
            //font-family: 'Questrial', sans-serif;
            font-family: 'Didact Gothic', sans-serif;
        }
    }
`;