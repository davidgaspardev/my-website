import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

type ParagraphProps = TypographyProps;

export const Paragraph = styled('p')<ParagraphProps>(
    typography
);