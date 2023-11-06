import styled from 'styled-components';

export const BaseContainer = styled.div<{ $md?: boolean; $lg?: boolean; $xl?: boolean; $margin?: string }>`
  max-width: ${props => (props.$md ? 970 : props?.$lg ? 1200 : 1440)}px;
  width: 100%;
  margin: ${props => props.$margin ?? '16px auto'};
`;
