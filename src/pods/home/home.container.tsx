import React from 'react';
import LogoManfred from '@/core/assets/logo-manfred1.jpg';
import LogoEuropass from '@/core/assets/logo-europass.jpg';
import { CardComponent } from '@/components/CardComponent/CardComponent';

export const HomeContainer = () => {
  return (
    <CardComponent
      description={'Convierte tu cv'}
      primaryLogo={LogoManfred}
      primaryLogoAltText={'Logo de Manfred'}
      optionalText={'a formato europass'}
      secondaryLogo={LogoEuropass}
      secondayLogoAltText={'Logo de Europass'}
      buttonText={'Comenzar'}
    ></CardComponent>
  );
};
