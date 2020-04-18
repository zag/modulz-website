import React from 'react';
import { gsap } from 'gsap';
import { theme, Box } from '@modulz/radix';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { EditorIllustration } from '../components/EditorIllustration';
import { TextEditorIllustration } from '../components/TextEditorIllustration';

const Editor = () => {
  const tl = gsap.timeline();
  React.useEffect(() => {
    tl.set('.visual-editor', { opacity: 1, yPercent: 50 });
    tl.set('.text-editor', { opacity: 0, yPercent: -50 });

    tl.from('.visual-editor .sidebar > div', {
      // delay: 0.5,
      duration: 1,
      ease: 'back',
      opacity: 0,
      y: -10,
      stagger: 0.025,
    });

    tl.to('.visual-editor', {
      duration: 0.5,
      yPercent: 20,
      ease: 'back',
    });

    tl.to('.text-editor', {
      duration: 0.5,
      yPercent: -20,
      opacity: 1,
      ease: 'back',
      delay: '-0.5',
    });

    tl.to('.visual-editor .button .gradient', {
      delay: 1,
      duration: 0.5,
      opacity: 1,
      ease: 'back',
    });

    tl.to('.visual-editor .button', {
      duration: 0.5,
      borderRadius: 25,
    });

    tl.to('.visual-editor .button', {
      duration: 0.5,
      ease: 'elastic',
      height: theme.sizes[6],
    });

    tl.to('.visual-editor .button', {
      duration: 0.5,
      ease: 'elastic',
      paddingLeft: theme.space[3],
      paddingRight: theme.space[3],
    });

    tl.to('.visual-editor .button', {
      duration: 0.5,
      borderWidth: '1px',
    });

    tl.to('.visual-editor .button', {
      duration: 0.5,
      boxShadow: '0 2px 5px rgba(0,0,0,.1)',
    });

    // tl.set('.sidebar > div', { opacity: 0, y: -10 });

    // tl.from('.visual-editor', {
    //   delay: 0.3,
    //   duration: 1,
    //   ease: 'back',
    //   opacity: 0,
    //   y: -100,
    // });

    // tl.from('.text-editor', {
    //   delay: 0.3,
    //   duration: 1,
    //   ease: 'back',
    //   opacity: 0,
    //   y: -100,
    // });
  }, []);

  return (
    <Box>
      <TitleAndMetaTags />

      <Box mx="auto" sx={{ width: 'fit-content' }}>
        <EditorIllustration />
        <TextEditorIllustration />
      </Box>
    </Box>
  );
};

export default Editor;
