import React from 'react';
import LogoManfred from '@/core/assets/logo-manfred1.jpg';
import LogoEuropass from '@/core/assets/logo-europass.jpg';
import { Card } from '@/common/components';
import * as classes from './home.container.styles';

export const Home: React.FunctionComponent = () => {
  return (
    <Card
      title='Convierte tu cv'
      primaryLogo={LogoManfred}
      primaryLogoAltText='Logo de Manfred'
    >
      <h3>a formato europass</h3>
      <img src={LogoEuropass} alt='Logo de Europass' />
      <button className={classes.beginButton}>Comenzar</button>
    </Card>
  );
};
