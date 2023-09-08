import React from 'react'
import Particles from 'react-tsparticles';
import config from './config/particles-config';
import {loadFull} from 'tsparticles'

const Background = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <Particles init={particlesInit} options={config}></Particles>
  )
}

export default Background;