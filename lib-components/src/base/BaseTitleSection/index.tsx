import { BaseTitleSectionDescription, BaseTitleSectionLink, BaseTitleSectionTitle, BaseTitleSectionWrapper } from './styled';

export interface IBaseTitleSectionProps {
  title: string;
  description?: string;
  seeMoreLink?: string;
}

const BaseTitleSection = ({ title, description, seeMoreLink }: IBaseTitleSectionProps) => (
  <BaseTitleSectionWrapper>
    <div>
      <BaseTitleSectionTitle>{title}</BaseTitleSectionTitle>
      {description && <BaseTitleSectionDescription>{description}</BaseTitleSectionDescription>}
    </div>

    {seeMoreLink && (
      <BaseTitleSectionLink>
        <span>See More</span>
        <span> {'>'} </span>
      </BaseTitleSectionLink>
    )}
  </BaseTitleSectionWrapper>
);

export default BaseTitleSection;
