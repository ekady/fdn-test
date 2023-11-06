import styled from 'styled-components';
import { MdOutlinePerson, MdFormatListBulleted, MdOutlineChatBubbleOutline } from 'react-icons/md';

export const BaseGroupCardContainer = styled.div`
  width: 260px;
  height: 360px;
  border-radius: 5px;
  -webkit-box-shadow: 0 0px 4px 0px rgb(0 0 0 / 21%);
  box-shadow: 0 0px 4px 0px rgb(0 0 0 / 21%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 20px;
  }
`;

export const BaseGroupCardPhoto = styled.img`
  border-radius: 100%;
  height: 160px;
  width: 160px;
`;

export const BaseGroupCardCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    text-align: center;
  }
`;

export const BaseGroupCardCardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const BaseGroupCardIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const BaseGroupCardPersonIcon = styled(MdOutlinePerson)`
  font-size: 1.5rem;
  background: none;
`;

export const BaseGroupCardListIcon = styled(MdFormatListBulleted)`
  font-size: 1.5rem;
  background: none;
`;

export const BaseGroupCardMessageIcon = styled(MdOutlineChatBubbleOutline)`
  font-size: 1.5rem;
  background: none;
`;
