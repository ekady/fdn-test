import {
  BaseNavbarContainer,
  BaseNavbarContent,
  BaseNavbarMenuLogo,
  BaseNavbarLogo,
  BaseNavbarSearchContent,
  BaseNavbarSearchBar,
  BaseNavbarSearchIcon,
  BaseNavbarSearchInput,
  BaseNavbarLogin,
  BaseNavbarAccountIcon,
} from './styled';

import logo from '@/assets/images/logo.png';

const BaseNavbar = () => {
  return (
    <BaseNavbarContainer title="Female Daily">
      <BaseNavbarContent>
        <BaseNavbarMenuLogo />
        <BaseNavbarLogo src={logo} alt="Logo" />
      </BaseNavbarContent>

      <BaseNavbarSearchContent>
        <BaseNavbarSearchBar>
          <BaseNavbarSearchIcon />
          <BaseNavbarSearchInput placeholder="Search products, articles, topics, brands, etc" type="text" />
        </BaseNavbarSearchBar>
      </BaseNavbarSearchContent>

      <BaseNavbarLogin> 
        <BaseNavbarAccountIcon />
        <span>LOGIN / SIGN UP</span>
      </BaseNavbarLogin>
    </BaseNavbarContainer>
  );
};

export default BaseNavbar;
