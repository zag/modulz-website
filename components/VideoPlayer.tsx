import React from 'react';
import { AspectRatio, Box, Flex, Image as RadixImage } from '@modulz/radix';

type VideoPlayerProps = { id?: string; poster?: string };

export const VideoPlayer = ({ id, poster, ...props }: VideoPlayerProps) => {
  const [hasStartedPlaying, setHasStartedPlaying] = React.useState(false);
  const [posterUrl, setPosterUrl] = React.useState(poster || undefined);

  React.useEffect(() => {
    if (!poster) {
      const img = new Image();
      img.src = `http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
      img.onload = () => {
        if (img.width <= 120) {
          setPosterUrl(`http://i3.ytimg.com/vi/${id}/hqdefault.jpg`);
        } else {
          setPosterUrl(img.src);
        }
      };
    }
  }, []);

  return (
    <AspectRatio ratio="16:9" sx={{ overflow: 'hidden' }}>
      <Flex
        as="button"
        aria-label="Play video"
        onClick={() => setHasStartedPlaying(true)}
        sx={{
          appearance: 'none',
          border: 0,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          bg: 'gray200',
          ':hover, :focus': {
            '[data-part-id="box"]': {
              transform: 'scale(1.2)',
            },
          },
        }}
      >
        {posterUrl && <RadixImage src={posterUrl} sx={{ width: '100%', height: '100%' }} />}

        <Box
          sx={{
            position: 'absolute',
            boxSizing: 'content-box',
            bg: 'blue600',
            color: 'white',
            borderRadius: '50%',
            padding: 2,
            svg: {
              width: 5,
              height: 5,
            },
            transform: hasStartedPlaying && 'scale(1.8) !important',
            opacity: hasStartedPlaying && '0',
            transition: hasStartedPlaying ? 'all 300ms' : 'all 100ms',
          }}
        >
          <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
          </svg>
        </Box>
      </Flex>

      {hasStartedPlaying && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, width: '100%', height: '100%' }}
          {...props}
        ></iframe>
      )}
    </AspectRatio>
  );
};
