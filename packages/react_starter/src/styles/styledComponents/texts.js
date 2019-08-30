import styled from 'styled-components';
import { type Style } from '../appStyles';

export const StyledText: React$ComponentType<Style> = styled.span`
  font-size: ${(props: Style) => props.theme.textSizes.regular};
  color: ${(props: Style) => props.theme.colors.primary};
`;

export const StyledTextBold: React$ComponentType<Style> = styled.span`
  font-size: ${(props: Style) => props.theme.textSizes.big};
  color: ${(props: Style) => props.theme.colors.primary};
  font-weight: bold;
`;
