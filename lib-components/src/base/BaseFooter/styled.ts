import styled from 'styled-components';

export const BaseFooterWrapper = styled.footer`
  border-top: 1px solid #dfe3e8;
  width: 100%;
`;

export const BaseFooterContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BaseFooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const BaseFooterLinkInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-weight: bold;
  }
`;

export const BaseFooterAppLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: auto;
    height: 50px;
  }
`;

export const BaseFooterLogoCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img.logo {
    height: 50px;
    width: auto;
  }

  p.copyright {
    color: #ddd;
  }

  div.social {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 40px;
      width: auto;
    }
  }
`;
