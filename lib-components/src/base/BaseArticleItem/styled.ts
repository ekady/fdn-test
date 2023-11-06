import styled from 'styled-components';

export const BaseArticlesItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  position: relative;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  span.title {
    font-size: 16px;
    font-weight: bold;
  }

  span.sponsored {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 12px;
    color: #db284e;
    background-color: #fff;
    font-weight: bold;
  }
`;

export const BaseArticlesItemAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span.author {
    color: #4e4e4e;
  }

  span.time {
    color: #aaa;
  }
`;
