import { ReactNode } from 'react';

import appStore from '@/assets/images/app_store.png';
import googlePlay from '@/assets/images/google_play.png';
import logo from '@/assets/images/logo.png';
import facebook from '@/assets/images/facebook.png';
import twitter from '@/assets/images/twitter.png';
import instagram from '@/assets/images/instagram.png';
import youtube from '@/assets/images/youtube.png';

import {
  BaseFooterAppLink,
  BaseFooterContainer,
  BaseFooterLinkInner,
  BaseFooterLinkWrapper,
  BaseFooterLogoCopyright,
  BaseFooterWrapper,
} from './styled';
import { BaseContainer } from '../BaseContainer/styled';

export interface IBaseFooterProps {
  children?: ReactNode;
}

const BaseFooter = ({ children }: IBaseFooterProps) => (
  <BaseFooterWrapper>
    <BaseContainer $lg>
      <BaseFooterContainer>
        <BaseFooterLinkWrapper>
          <BaseFooterLinkInner>
            <span> About Us</span>
            <span> Feedback</span>
            <span> Contact</span>
          </BaseFooterLinkInner>
          <BaseFooterLinkInner>
            <span> Terms & Conditions </span>
            <span> Privacy Policy </span>
            <span> Help </span>
          </BaseFooterLinkInner>
          <BaseFooterLinkInner>
            <span> Awards </span>
            <span> Newsletter </span>
          </BaseFooterLinkInner>
          <BaseFooterLinkInner>
            <span> Download Our Mobile App </span>
            <BaseFooterAppLink>
              <img src={appStore} alt="Female Daily App Store" />
              <img src={googlePlay} alt="Female Daily Google Play" />
            </BaseFooterAppLink>
          </BaseFooterLinkInner>
        </BaseFooterLinkWrapper>

        <BaseFooterLogoCopyright>
          <div>
            <img className="logo" src={logo} alt="Logo" />
            <p className="copyright">Copyright © 2015-2017 Female Daily Network · All rights reserved</p>
          </div>
          <div className="social">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={youtube} alt="Youtube" />
          </div>
        </BaseFooterLogoCopyright>
      </BaseFooterContainer>
    </BaseContainer>
    {children}
  </BaseFooterWrapper>
);

export default BaseFooter;
