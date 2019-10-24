import React from 'react';

import firstImage from '../static/images/DCFestival.jpg';

const SideCover = () => {
  return (
    <div className="side-cover-wrapper full-screen d-none d-lg-block">
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: '#333'
        }}
      >
        <div
          className="full-screen force-full-screen"
          style={{
            background: `linear-gradient(to bottom right, rgba(243,144,79,.4), rgba(59,67,113,.4)), url(${firstImage}) center`,
            backgroundSize: 'cover',
            height: '100%'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SideCover;
