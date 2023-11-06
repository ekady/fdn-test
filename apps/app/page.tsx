'use client';

import { BaseContainer, BaseAdsBox } from 'lib-components';
import EditorChoices from './_components/EditorChoice';
import Matches from './_components/Matches';
import Articles from './_components/Articles';
import Reviews from './_components/Reviews';
import Popular from './_components/Popular';
import Videos from './_components/Videos';
import Trending from './_components/Trending';
import Brands from './_components/Brands';
import { SubFooterSubTitle } from './_components/SubFooter/styled';
import { useGetDataQuery } from './_store/api.slice';

export default function Home() {
  useGetDataQuery();

  return (
    <main>
      <BaseContainer $md>
        <BaseAdsBox height={50} width={970}>
          <h2>Top Frame 970x50</h2>
        </BaseAdsBox>
      </BaseContainer>

      <BaseContainer $md className="my-8">
        <BaseAdsBox height={250} width={970}>
          <h2>Billboard 970x250</h2>
        </BaseAdsBox>
      </BaseContainer>

      <BaseContainer $lg $margin="40px auto">
        <EditorChoices />
      </BaseContainer>

      <BaseContainer $xl $margin="40px auto">
        <Matches />
      </BaseContainer>

      <BaseContainer $md className="my-8">
        <BaseAdsBox height={250} width={970}>
          <>
            <h2>Horizontal 970x250</h2>
            <h2>(Internal campaign only)</h2>
          </>
        </BaseAdsBox>
      </BaseContainer>

      <BaseContainer $lg $margin="80px auto">
        <Articles />
      </BaseContainer>

      <BaseContainer $lg $margin="80px auto">
        <Reviews />
      </BaseContainer>

      <BaseContainer $lg $margin="80px auto">
        <Popular />
      </BaseContainer>

      <BaseContainer $lg $margin="80px auto">
        <Videos />
      </BaseContainer>

      <BaseContainer $lg $margin="40px auto">
        <Trending />
      </BaseContainer>

      <BaseContainer $lg $margin="40px auto">
        <Brands />
      </BaseContainer>

      <BaseContainer $lg $margin="0 auto 80px auto">
        <h2>Female Daily - Find everything you want to know about beauty on Female Daily</h2>
        <SubFooterSubTitle>
          Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything!
          We are here to be your friendly solution to all things beauty, inside and out!
        </SubFooterSubTitle>
      </BaseContainer>
    </main>
  );
}
