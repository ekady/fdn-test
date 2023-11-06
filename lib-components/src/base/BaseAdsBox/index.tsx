import { ReactElement } from 'react';
import { BaseAdsBoxContainer } from './styled';

export interface IBaseAdsBoxProps {
  width?: number;
  height?: number;
  children?: ReactElement;
}

const BaseAdsBox = ({ width, height, children }: IBaseAdsBoxProps) => (
  <BaseAdsBoxContainer $height={height} $width={width}>
    {children}
  </BaseAdsBoxContainer>
);

export default BaseAdsBox;
