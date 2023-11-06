import { BaseProduct, BaseTitleSection } from 'lib-components';
import { EditorChoicesWrapper } from './styled';
import { useAppSelector } from '@/_store';
import { selectEditors } from '@/_store/api.selector';

const EditorChoices = () => {
  const editors = useAppSelector(selectEditors);
  return (
    <div>
      <BaseTitleSection title="Editor's Choice" description="Curated with love" />

      <EditorChoicesWrapper>
        {editors?.map((item, index) => (
          <BaseProduct
            key={index}
            productImage={item.product.image}
            productDescription={item.product.description}
            productName={item.product.name}
            rating={item.product.rating}
            totalRating={17}
            bordered
            usingEditor
            editorName={item.editor}
            editorOccupation={item.role}
          />
        ))}
      </EditorChoicesWrapper>
    </div>
  );
};

export default EditorChoices;
