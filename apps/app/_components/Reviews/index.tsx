import { BaseAdsBox, BaseReview, BaseTitleSection, IBaseReviewProps } from 'lib-components';
import { ReviewsListContainer, ReviewsWrapper } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { useAppSelector } from '@/_store';
import { selectReviews } from '@/_store/api.selector';

const list: IBaseReviewProps[] = [
  {
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    productSub: 'test',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis repudiandae eaque at? Accusamus recusandae porro iure consectetur incidunt rerum inventore eligendi, nisi nulla libero necessitatibus dolorum aspernatur asperiores velit.',
    time: '2 minutes ago',
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
    userName: 'Unknown person',
    userSkin: 'Unknown skin',
  },
  {
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    productSub: 'test',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis repudiandae eaque at? Accusamus recusandae porro iure consectetur incidunt rerum inventore eligendi, nisi nulla libero necessitatibus dolorum aspernatur asperiores velit.',
    time: '2 minutes ago',
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
    userName: 'Unknown person',
    userSkin: 'Unknown skin',
  },
  {
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    productSub: 'test',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis repudiandae eaque at? Accusamus recusandae porro iure consectetur incidunt rerum inventore eligendi, nisi nulla libero necessitatibus dolorum aspernatur asperiores velit.',
    time: '2 minutes ago',
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
    userName: 'Unknown person',
    userSkin: 'Unknown skin',
  },
  {
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    productSub: 'test',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis repudiandae eaque at? Accusamus recusandae porro iure consectetur incidunt rerum inventore eligendi, nisi nulla libero necessitatibus dolorum aspernatur asperiores velit.',
    time: '2 minutes ago',
    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg',
    userName: 'Unknown person',
    userSkin: 'Unknown skin',
  },
];

const Reviews = () => {
  const reviews = useAppSelector(selectReviews);
  return (
    <>
      <ReviewsWrapper>
        <BaseTitleSection title="Latest Reviews" description="So you can make better purchase decision" seeMoreLink="#articles" />
      </ReviewsWrapper>

      <ReviewsWrapper>
        <ReviewsListContainer>
          <Swiper
            spaceBetween={0}
            scrollbar={{ draggable: true }}
            modules={[Pagination]}
            slidesPerView={2}
            pagination={{ clickable: true }}
            style={{ width: '800px', height: '400px' }}
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <BaseReview
                  productImage={review.product.image}
                  productName={review.product.name}
                  rating={review.star}
                  productSub={review.product.desc}
                  review={review.comment}
                  userName={review.user}
                  userSkin={review.profile.join(', ')}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ReviewsListContainer>

        <BaseAdsBox height={250} width={300}>
          <>
            <h2>MR 2</h2>
            <h2>300x250</h2>
          </>
        </BaseAdsBox>
      </ReviewsWrapper>
    </>
  );
};

export default Reviews;
