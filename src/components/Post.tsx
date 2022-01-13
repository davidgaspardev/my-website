import { useRef } from "react";
import styled from "styled-components";
import { PostMetadata } from "../helpers/types";
import { Box } from "./base/Box";
import { Flex } from "./base/Flex";
import { Paragraph } from "./base/Paragraph";
import { Text } from "./base/Text";

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

                <Flex flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <h3>{data.title}</h3>

                    <Paragraph textAlign="end" fontSize="8pt">
                        {`${dateRef.current.getDate()}/${dateRef.current.getMonth()}/${dateRef.current.getFullYear()}`}
                    </Paragraph>
                </Flex>

                <Text className="excerpt">{data.excerpt}</Text>
                
                <Flex flexDirection="row-reverse">
                    {
                        data.labels.map((label, index) => <SpanLabel key={index}>{label}</SpanLabel>)
                    }
                </Flex>

            </Container>
        </Box>
    );
}

const Container = styled.div`
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 500ms;
    border: 1px solid transparent;

    &:hover {
        background-color: rgba(128,128,128,.05);
    }

    h3 {
        padding-bottom: 10px;
        font-family: 'Readex Pro', sans-serif;
        font-size: 16pt;
    }

    p {
        opacity: 0.75;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    .excerpt {
        margin: 10px 0px;
    }
`;

function SpanLabel(props: { children: string }) {
    const { children } = props;

    return (
        <SpanLabelContainer>
            <Text fontSize="10pt">{ children.toLocaleLowerCase() }</Text>
        </SpanLabelContainer>
    );
}

const SpanLabelContainer = styled.div`
    background-color: #83c6c1;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 8px;

    p {
        color: white;
        padding: 0;
        margin: 0;
    }
`;