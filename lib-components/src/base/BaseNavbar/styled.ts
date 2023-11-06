import styled from 'styled-components';

import { MdMenu, MdSearch, MdOutlineAccountCircle } from 'react-icons/md';

export const BaseNavbarContainer = styled.div`
  height: 77px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfe3e8;
  gap: 20px;
`;

export const BaseNavbarWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const BaseNavbarContent = styled(BaseNavbarWrapper)`
  padding-left: 20px;
`;

export const BaseNavbarMenuLogo = styled(MdMenu)`
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  color: #dfe3e8;
`;

export const BaseNavbarLogo = styled.img`
  margin-left: 12px;
  width: auto;
  height: 100%;
`;

export const BaseNavbarSearchContent = styled(BaseNavbarWrapper)`
  flex-grow: 1;
`;

export const BaseNavbarSearchBar = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border: 2px solid #eee;
  border-radius: 8px;
  gap: 8px;
`;

export const BaseNavbarSearchIcon = styled(MdSearch)`
  font-size: 1.5rem;
  color: #dfe3e8;
`;

export const BaseNavbarSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const BaseNavbarLogin = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: #dc294f;
  color: #fff;
  cursor: pointer;
`;

export const BaseNavbarAccountIcon = styled(MdOutlineAccountCircle)`
  font-size: 1.5rem;
`;
