import React from 'react';

import * as classes from './home.containerStyles';
import LogoManfred from '@/core/assets/logo-manfred1.jpg';
import LogoEuropass from '@/core/assets/logo-europass.jpg';

export const HomeContainer = () => {
  return (
    <main className={classes.main}>
      <div className={classes.containerTitle1}>
        <h1 className={classes.title(139)}>Convierte tu cv</h1>
      </div>
      <div className={classes.containerLogoManfred}>
        <img src={LogoManfred} alt='Logo de Manferd' />
      </div>
      <div className={classes.containerTitle2}>
        <h3 className={classes.title(174)}>a formato europass</h3>
      </div>
      <img src={LogoEuropass} alt='Logo de Europass' />
      <div className={classes.buttonContainer}>
        <button className={classes.beginButton}>Comenzar</button>
      </div>
    </main>
  );
};
