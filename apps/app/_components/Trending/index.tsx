import { useAppSelector } from '@/_store';
import { selectEditors } from '@/_store/api.selector';
import { BaseProduct, BaseTitleSection, IBaseProductProps } from 'lib-components';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const list: IBaseProductProps[] = [
  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },
  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },

  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },

  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },

  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },
  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },

  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },

  {
    productColor: 'Badge',
    productDescription: 'Lorem psum sdkfjhklahf sakjfhsa sakjdhfksa sakjfhksa askjfhsa',
    productImage: 'https://n4.sdlcdn.com/imgs/g/s/y/Makeover-Professional-Liquid-Foundation-Beige-SDL182294112-1-01ecc.jpg',
    productName: 'Makeover-Professional-Liquid-Foundation-Beige-SDL',
    rating: 4.8,
    totalRating: 17,
  },
];

const Trending = () => {
  const products = useAppSelector(selectEditors);

  return (
    <div>
      <BaseTitleSection title="Trending This Week" description="See our weekly most reviewed products" />

      <Swiper
        spaceBetween={30}
        scrollbar={{ draggable: true }}
        modules={[Pagination]}
        slidesPerView={6}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '400px' }}
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <BaseProduct
              productImage={item.product.image}
              productDescription={item.product.description}
              productName={item.product.name}
              rating={item.product.rating}
              totalRating={17}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
