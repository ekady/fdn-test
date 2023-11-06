import { MdStar } from 'react-icons/md';
import styled from 'styled-components';

export const BaseReviewWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px 20px 40px 20px;
  width: 320px;
`;

export const BaseReviewProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    height: 60px;
    width: 60px;
    object-fit: contain;
  }

  p.title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  p.subtitle {
    font-size: 16px;
  }
`;

export const BaseReviewRatingTime = styled.div`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span.time {
    color: #aaa;
  }
`;

export const BaseReviewRatings = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const BaseReviewRating = styled(MdStar)<{ $rated?: string }>`
  font-size: 18px;
  color: ${props => (props.$rated ? '#DB284E' : '#D1D1D1')};
`;

export const BaseReviewText = styled.span<{ $show?: boolean }>`
  padding: 12px 0px;
  .readmore {
    text-transform: capitalize;
    color: #db284e;
    display: ${props => (props.$show ? 'inline-block' : 'none')};
  }
`;

export const BaseReviewUser = styled.div`
  width: 320px;
  margin-top: -28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  span.name {
    font-size: 14px;
  }

  span.skin {
    font-size: 12px;
  }
`;
