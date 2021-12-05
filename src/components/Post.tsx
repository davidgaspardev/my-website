import { useRef } from "react";
import styled from "styled-components";
import { PostMetadata } from "../helpers/types";
import { Box } from "./base/Box";
import { Paragraph } from "./base/Paragraph";

type Props = {
    onClick: () => void;
    data: PostMetadata;
};

export default function Post(props: Props): JSX.Element {
    const { data, onClick } = props;
    const dateRef = useRef<Date>(new Date(data.date));

    return (
        <Box
            onClick={onClick}
            maxWidth={600}
            width="100%"
            m={20}>
            <Container>

                <h3>{data.title}</h3>
                <p>{data.excerpt}</p>
                <Paragraph textAlign="end" fontSize="8pt">
                    {`${dateRef.current.getDate()}/${dateRef.current.getMonth()}/${dateRef.current.getFullYear()}`}
                </Paragraph>

            </Container>
        </Box>
    );
}

const Container = styled.div`
    background-color: rgba(128,128,128,.05);
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 500ms;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid grey;
        background-color: rgba(128,128,128,.1);
    }
`;