import { useState, useRef, useEffect } from 'react';

export const Form = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);

  const iframeCallback = (event: MessageEvent) => {
    const { hostname: originHost } = new URL(event.origin);
    if (originHost === 'localhost' || originHost.match(/gingerblocks\.com$/)) {
      if (event.data.height) {
        setHeight(event.data.height);
      } else if (event.data.finished) {
        console.log('FINISHED!');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('message', iframeCallback);
    return () => {
      window.removeEventListener('message', iframeCallback);
    };
  });

  return (
    <iframe
      ref={iframeRef}
      src="http://localhost:3000/onboard"
      width="100%"
      height={`${height}px`}
      scrolling="no"
      style={{
        maxWidth: 640,
        width: '100%',
        overflow: 'hidden',
      }}
    ></iframe>
  );
};
