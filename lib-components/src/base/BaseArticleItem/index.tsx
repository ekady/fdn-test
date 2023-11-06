import { BaseArticlesItemAuthorWrapper, BaseArticlesItemWrapper } from './styled';

export interface IBaseArticleItemProps {
  image: string;
  title?: string;
  author?: string;
  time?: string;
  sponsored?: boolean;
}

const BaseArticleItem = ({ image, author, time, title, sponsored }: IBaseArticleItemProps) => (
  <BaseArticlesItemWrapper>
    {sponsored && <span className="sponsored">Sponsored</span>}

    <img src={image} alt={title} />
    <span className="title">{title}</span>
    <BaseArticlesItemAuthorWrapper>
      <span className="author">{author ?? 'Username'}</span>
      <span>|</span>
      <span className="time">{time ?? '-'}</span>
    </BaseArticlesItemAuthorWrapper>
  </BaseArticlesItemWrapper>
);

export default BaseArticleItem;
