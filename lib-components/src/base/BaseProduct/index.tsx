import {
  BaseProductColor,
  BaseProductContainer,
  BaseProductDescription,
  BaseProductEditor,
  BaseProductEditorImage,
  BaseProductEditorTitle,
  BaseProductMatches,
  BaseProductRating,
  BaseProductRatingWrapper,
  BaseProductRatings,
  BaseProductTitle,
  BaseProductWrapper,
} from './styled';

export interface IBaseProductProps {
  productImage?: string;
  productName?: string;
  productDescription?: string;
  productColor?: string;
  rating?: number;
  totalRating?: number;
  usingEditor?: boolean;
  editorName?: string;
  editorImage?: string;
  editorOccupation?: string;
  bordered?: boolean;
  matches?: string;
}

const BaseProduct = ({
  productDescription,
  productImage,
  productName,
  productColor,
  rating,
  totalRating,
  bordered,
  usingEditor,
  matches,
  editorImage,
  editorName,
  editorOccupation,
}: IBaseProductProps) => {
  return (
    <BaseProductContainer>
      {usingEditor && (
        <BaseProductEditor>
          <BaseProductEditorImage
            src={
              editorImage
                ? editorImage
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
            }
          />
          <BaseProductEditorTitle>
            <span className="title">{editorName}</span>
            <span className="subtitle">{editorOccupation}</span>
          </BaseProductEditorTitle>
        </BaseProductEditor>
      )}

      <BaseProductWrapper $bordered={bordered}>
        <img src={productImage} alt={productName} />

        {matches && <BaseProductMatches>{matches}</BaseProductMatches>}

        <BaseProductRatingWrapper>
          <span className="rating">{rating}</span>
          <BaseProductRatings>
            <BaseProductRating $rated={rating && Math.floor(rating) >= 1} />
            <BaseProductRating $rated={rating && Math.floor(rating) >= 2} />
            <BaseProductRating $rated={rating && Math.floor(rating) >= 3} />
            <BaseProductRating $rated={rating && Math.floor(rating) >= 4} />
            <BaseProductRating $rated={rating && Math.floor(rating) >= 5} />
          </BaseProductRatings>
          <span>({totalRating})</span>
        </BaseProductRatingWrapper>

        <BaseProductTitle>{productName}</BaseProductTitle>
        <BaseProductDescription>{productDescription}</BaseProductDescription>
        <BaseProductColor>{productColor}</BaseProductColor>
      </BaseProductWrapper>
    </BaseProductContainer>
  );
};

export default BaseProduct;
