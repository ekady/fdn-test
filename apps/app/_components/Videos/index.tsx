import { BaseTitleSection } from 'lib-components';
import { VideosWrapper, VideosWrapperIframe, VideosWrapperSmall } from './styled';

const videoEmbedId = {
  full: '6LUdS0VFOJc',
};

const Videos = () => (
  <div>
    <BaseTitleSection title="Latest Videos" description="Watch and learn, ladies" seeMoreLink="#videos" />

    <VideosWrapper>
      <VideosWrapperIframe
        src={`https://www.youtube.com/embed/${videoEmbedId.full}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <VideosWrapperSmall>
        <VideosWrapperIframe
          src={`https://www.youtube.com/embed/${videoEmbedId.full}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <VideosWrapperIframe
          src={`https://www.youtube.com/embed/${videoEmbedId.full}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideosWrapperSmall>
    </VideosWrapper>
  </div>
);

export default Videos;
