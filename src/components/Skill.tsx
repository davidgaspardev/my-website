import styled from "styled-components";
import { SkillInfo } from "../helpers/types";
import Image from "next/image";

type Props = {
    data: SkillInfo;
};

export default function Skill(props: Props) {
    // Destructuring assignment
    const { iconPath, name, description } = props.data;

    return (
        <SkillStyled>
            <div>
                <Image src={iconPath} width={75} height={75}/>
                <h2>{name}</h2>
            </div>
        </SkillStyled>
    );
}

const SkillStyled = styled.div`
    width: 180px;
    height: 220px;
    padding: 10px;

    > div {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #F7F7F7;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;