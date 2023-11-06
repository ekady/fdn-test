import styled from 'styled-components';

export const VideosWrapper = styled.div`
  height: 480px;
  gap: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const VideosWrapperSmall = styled.div`
  gap: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const VideosWrapperIframe = styled.iframe`
  width: 100%;
  height: 100%;
  frameborder: 0;
`;
