import React from 'react';
import { Button, ButtonProps } from '@modulz/design-system';

type MarketingButtonProps = ButtonProps & { as?: React.ReactNode };

export const MarketingButton = React.forwardRef<HTMLButtonElement, MarketingButtonProps>((props, forwardedRef) => (
  <Button
    ref={forwardedRef}
    {...props}
    css={{
      position: 'relative',
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      transition: 'all 100ms ease',
      fontSize: '$2',
      height: '$6',
      minWidth: '$6',
      paddingX: '$3',
      backgroundColor: 'transparent',
      color: '$blue900',
      willChange: 'transform',
      fontFamily: '$untitled',
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '-1',
        backgroundColor: 'white',
        transition: 'all 50ms ease',
        boxShadow: 'inset 0 0 0 1px $blue600',
      },
      '&::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '6px',
        left: '6px',
        zIndex: '-2',
        pointerEvents: 'none',
        willChange: 'transform',
        backgroundImage: 'repeating-linear-gradient(-45deg,$blue600,$blue600 1px,transparent 1px,transparent 6px)',
      },
      '&:hover::before, &:active::before, &:focus::before': {
        boxShadow: 'inset 0 0 0 1px $blue600',
      },
      '&:active': {
        transform: 'translate(1px, 1px)',
      },
      '&:active::after': {
        transform: 'translate(-6px, -6px)',
      },
      ...(props.css as any),
    }}
  />
));
