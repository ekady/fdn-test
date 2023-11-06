import styled from 'styled-components';

export const BaseAdsBoxContainer = styled.div<{ $height?: number; $width?: number }>`
  width: ${props => props.$width ?? '970'}px;
  height: ${props => props.$height ?? '50'}px;
  background-color: #d8d8d8;
  border: 1px solid #979797;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    color: #5a5a5a;
  }
`;
