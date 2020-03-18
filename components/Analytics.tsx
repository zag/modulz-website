import React from 'react';
import Router from 'next/router';

const { NODE_ENV } = process.env;

type WindowWithAnalytics = Window &
  typeof globalThis & {
    analytics: any;
  };

export const Analytics = () => {
  React.useEffect(() => {
    const handleRouteChange = url => {
      if (NODE_ENV === 'production') {
        // We need to wrap it in a rAF to ensure the correct data is sent to Segment
        // https://github.com/zeit/next.js/issues/6025
        requestAnimationFrame(() => (window as WindowWithAnalytics).analytics.page(url));
      }
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => Router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  return null;
};
