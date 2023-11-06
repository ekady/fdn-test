import { BaseProduct } from 'lib-components';
import { MatchesProducts, MatchesContainer, MatchesButton, MatchesWrapper, MatchesBgText, MatchesButtonWrapper } from './styled';
import { useAppSelector } from '@/_store';
import { selectEditors } from '@/_store/api.selector';

const Matches = () => {
  const products = useAppSelector(selectEditors);

  return (
    <MatchesContainer $xl>
      <MatchesWrapper>
        <MatchesBgText>
          <span className="title">Looking for products that are just simply perfect for you?</span>
          <span>
            Here are some products that we believe match your skin, hair, and body! Have we mentioned they solve your concerns
            too?
          </span>
          <MatchesButtonWrapper>
            <MatchesButton>See My Matches</MatchesButton>
          </MatchesButtonWrapper>
        </MatchesBgText>
        <MatchesProducts>
          {products?.length &&
            products.slice(0, 3).map((item, index) => {
              return (
                <BaseProduct
                  key={index}
                  productImage={item.product.image}
                  productDescription={item.product.description}
                  productName={item.product.name}
                  rating={item.product.rating}
                  totalRating={17}
                  matches="Match Skin Type"
                />
              );
            })}
        </MatchesProducts>
      </MatchesWrapper>
    </MatchesContainer>
  );
};

export default Matches;
