import React, { useEffect, useRef, useState } from 'react';
import MainApp from './MainApp';
import splashVideo from './assets/Videos/Diseny-Logo-Intro.mp4';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setShowSplash(false);
      }, 1000);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#131520]">
      {showSplash ? (
        <div className={`w-full h-full transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <video
            ref={videoRef}
            src={splashVideo}
            autoPlay
            muted
            className="w-screen h-screen object-cover fixed top-0 left-0 z-50"
          />
        </div>
      ) : (
        <MainApp />
      )}
    </div>
  );
}

export default App;
