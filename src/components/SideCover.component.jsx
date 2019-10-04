import React from 'react';

import firstImage from '../static/images/1.jpg';

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
            background: `url(${firstImage}) center right`,
            backgroundSize: 'cover',
            height: '100%'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SideCover;
