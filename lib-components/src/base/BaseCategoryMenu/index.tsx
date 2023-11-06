import { BaseCategoryLink, BaseCategoryMenuContainer } from './styled';

export interface IBaseCategoryMenuProps {
  categories: { name: string; to: string }[];
}

const BaseCategoryMenu = ({ categories }: IBaseCategoryMenuProps) => (
  <BaseCategoryMenuContainer>
    {categories.map(category => (
      <BaseCategoryLink key={category.name} href={category.to}>{category.name}</BaseCategoryLink>
    ))}
  </BaseCategoryMenuContainer>
);

export default BaseCategoryMenu;
