import { BaseArticleItem, BaseTitleSection } from 'lib-components';
import { ArticlesWrapper } from './styled';
import { useAppSelector } from '@/_store';
import { selectArticles } from '@/_store/api.selector';

const Articles = () => {
  const articles = useAppSelector(selectArticles);
  return (
    <>
      <BaseTitleSection title="Latest Articles" description="So you can make better purchase decision" seeMoreLink="#articles" />

      <ArticlesWrapper>
        {articles?.map((article, index) => (
          <BaseArticleItem key={index} image={article.image} author={article.author} title={article.title} time={article.published_at} />
        ))}
      </ArticlesWrapper>
    </>
  );
};

export default Articles;
