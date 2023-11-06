import { BaseTitleSection } from 'lib-components';
import { BrandsImageWrapper } from './styled';

import nivea from '@/_assets/images/nivea.jpg';
import ordinary from '@/_assets/images/theor.png';
import thebodyshop from '@/_assets/images/thebodyshop.png';
import sk2 from '@/_assets/images/sk.jpg';
import maybelline from '@/_assets/images/maybe.png';
import innisfree from '@/_assets/images/innisfree.jpg';

const images = [nivea, ordinary, thebodyshop, sk2, maybelline, innisfree];

const Brands = () => (
  <div>
    <BaseTitleSection title="Top Brands" description="We all know and love" seeMoreLink='#brands' />

    <BrandsImageWrapper>
      {images.map(image => (
        <img src={image.src} alt="" key={image.src} />
      ))}
    </BrandsImageWrapper>
  </div>
);

export default Brands;
