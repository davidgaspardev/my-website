import styled from 'styled-components'
import { typography, space, color, layout, TypographyProps, SpaceProps, ColorProps, LayoutProps } from 'styled-system'

type BoxProps = TypographyProps & SpaceProps & ColorProps & LayoutProps;

export const Box = styled('div')<BoxProps>(
  typography,
  space,
  color,
  layout
);