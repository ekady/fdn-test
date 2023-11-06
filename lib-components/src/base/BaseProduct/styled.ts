import styled from 'styled-components';
import { MdStar } from 'react-icons/md';

export const BaseProductContainer = styled.div`
  position: relative;
  paddding-top: 12px;
`;

export const BaseProductEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BaseProductEditorImageWrapper = styled.div`
  text-align: center;
`;

export const BaseProductEditorImage = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-bottom: -16px;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
`;

export const BaseProductEditorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  span.title {
    font-weight: bold;
    font-size: 16px;
  }
  span.subtitle {
    font-size: 12px;
    color: #a9a9a9;
  }
`;

export const BaseProductWrapper = styled.div<{ $bordered?: boolean }>`
  border-radius: 12px;
  border: ${props => (props.$bordered ? '1px solid #ddd' : 'none')};
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  height: 100%;
  padding: 16px;
  background-color: #fff;

  img {
    height: 180px;
    width: auto;
    object-fit: contain;
  }
`;

export const BaseProductTitle = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const BaseProductDescription = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const BaseProductColor = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #a9a9a9;
`;

export const BaseProductRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span.rating {
    font-weight: bold;
  }
`;

export const BaseProductRating = styled(MdStar)<{ $rated?: string }>`
  font-size: 18px;
  color: ${props => (props.$rated ? '#DB284E' : '#D1D1D1')};
`;

export const BaseProductRatings = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const BaseProductMatches = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #db284e;
  margin: 12px 0px;
`;
