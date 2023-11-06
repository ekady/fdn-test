'use client';

import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';

import { BaseCategoryMenu, BaseNavbar, IBaseCategoryMenuProps, BaseFooter, BaseContainer, BaseAdsBox } from 'lib-components';

import './_assets/styles/globals.css';
import { store } from './_store';

const inter = Inter({ subsets: ['latin'] });

const categories: IBaseCategoryMenuProps['categories'] = [
  { name: 'skincare', to: '#skincare' },
  { name: 'make up', to: '#make-up' },
  { name: 'body', to: '#body' },
  { name: 'hair', to: '#hair' },
  { name: 'fragrance', to: '#fragrance' },
  { name: 'nails', to: '#nails' },
  { name: 'tools', to: '#tools' },
  { name: 'brands', to: '#brands' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <BaseNavbar />
          <BaseCategoryMenu categories={categories} />

          <main>{children}</main>

          <BaseFooter>
            <BaseContainer $md>
              <BaseAdsBox height={50} width={970}>
                <h2>Bottom Frame 970x50, 468x60, 320x50</h2>
              </BaseAdsBox>
            </BaseContainer>
          </BaseFooter>
        </Provider>
      </body>
    </html>
  );
}
