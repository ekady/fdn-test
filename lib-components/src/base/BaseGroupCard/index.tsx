import {
  BaseGroupCardContainer,
  BaseGroupCardPhoto,
  BaseGroupCardCardContent,
  BaseGroupCardCardInfo,
  BaseGroupCardPersonIcon,
  BaseGroupCardIconContainer,
  BaseGroupCardListIcon,
  BaseGroupCardMessageIcon,
} from './styled';

export interface IBaseGroupCardProps {
  userImage: string;
}

const BaseGroupCard = ({ userImage }: IBaseGroupCardProps) => {
  return (
    <BaseGroupCardContainer>
      <BaseGroupCardPhoto src={userImage} />
      <h2>Embrace the curl</h2>
      <BaseGroupCardCardContent>
        <BaseGroupCardCardInfo>
          <BaseGroupCardIconContainer>
            <BaseGroupCardPersonIcon />
            <span>-</span>
          </BaseGroupCardIconContainer>
          <BaseGroupCardIconContainer>
            <BaseGroupCardListIcon />
            <span>-</span>
          </BaseGroupCardIconContainer>
          <BaseGroupCardIconContainer>
            <BaseGroupCardMessageIcon />
            <span>-</span>
          </BaseGroupCardIconContainer>
        </BaseGroupCardCardInfo>
        <span>May our curls pop and never stop!</span>
      </BaseGroupCardCardContent>
    </BaseGroupCardContainer>
  );
};

export default BaseGroupCard;
