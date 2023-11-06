import { BaseGroupCard, BaseTitleSection, IBaseGroupCardProps } from 'lib-components';
import { PopularWrapper } from './styled';

const list: IBaseGroupCardProps[] = [
  {
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
  },
  {
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
  },

  {
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
  },

  {
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
  },

  {
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
  },
];

const Popular = () => (
  <div>
    <BaseTitleSection title="Popular Groups" description="Where the beauty TALK are" seeMoreLink="#popular" />

    <PopularWrapper>
      {list.map((item, index) => (
        <BaseGroupCard key={index} {...item} />
      ))}
    </PopularWrapper>
  </div>
);

export default Popular;
