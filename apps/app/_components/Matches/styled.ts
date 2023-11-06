import styled from 'styled-components';
import matches from '@/_assets/images/matches.png';
import { BaseContainer } from 'lib-components';

export const MatchesContainer = styled(BaseContainer)`
  background-color: #fddae0;
`;

export const MatchesWrapper = styled.div`
  margin-bottom: 28px;
  background-image: url(${matches.src});
  background-position-y: bottom;
  background-repeat: no-repeat;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MatchesBgText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  margin-left: 270px;

  span.title {
    font-weight: bold;
    margin-top: 0;
    font-size: 28px;
  }

  span {
    margin-top: 20px;
    font-size: 20px;
  }
`;

export const MatchesButtonWrapper = styled.div`
  text-align: right;
`;

export const MatchesButton = styled.button`
  margin-top: 28px;
  border: 0;
  background-color: #db284e;
  height: 48px;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const MatchesProducts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
