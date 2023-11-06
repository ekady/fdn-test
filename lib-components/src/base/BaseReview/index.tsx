import {
  BaseReviewProduct,
  BaseReviewRating,
  BaseReviewRatingTime,
  BaseReviewRatings,
  BaseReviewText,
  BaseReviewUser,
  BaseReviewWrapper,
} from './styled';

export interface IBaseReviewProps {
  productImage: string;
  productName: string;
  productSub: string;
  rating?: number;
  time?: string;
  review?: string;
  userImage?: string;
  userName?: string;
  userSkin?: string;
}

const BaseReview = ({
  productImage,
  productName,
  productSub,
  rating,
  review,
  time,
  userImage,
  userSkin,
  userName,
}: IBaseReviewProps) => {
  return (
    <div>
      <BaseReviewWrapper>
        <BaseReviewProduct>
          <img src={productImage} alt={productName} />
          <div>
            <p className="title">{productName}</p>
            <p className="subtitle">{productSub}</p>
          </div>
        </BaseReviewProduct>
        <hr />
        <BaseReviewRatingTime>
          <BaseReviewRatings>
            <BaseReviewRating $rated={rating && Math.floor(rating) >= 1} />
            <BaseReviewRating $rated={rating && Math.floor(rating) >= 2} />
            <BaseReviewRating $rated={rating && Math.floor(rating) >= 3} />
            <BaseReviewRating $rated={rating && Math.floor(rating) >= 4} />
            <BaseReviewRating $rated={rating && Math.floor(rating) >= 5} />
          </BaseReviewRatings>

          <span className="time">{time}</span>
        </BaseReviewRatingTime>

        <BaseReviewText $show={!!(review && review?.length > 105)}>
          {review && review?.length > 105 ? (
            <>
              <span>{review?.slice(0, 105)}...</span>
              <span className="readmore"> Read More </span>
            </>
          ) : (
            review
          )}
        </BaseReviewText>
      </BaseReviewWrapper>

      <BaseReviewUser>
        <img
          src={
            userImage ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
          }
          alt={userName}
        />
        <span className="name">{userName}</span>
        <span className="skin">{userSkin}</span>
      </BaseReviewUser>
    </div>
  );
};

export default BaseReview;
