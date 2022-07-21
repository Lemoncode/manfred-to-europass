import React from 'react';
import LogoEuropass from '@/core/assets/logo-europass.jpg';
import { Card } from '@/common/components';
import * as classes from './donwload.container.styles';

export const Download: React.FunctionComponent = () => {
  return (
    <Card
      title='Proceso completado, puedes descargar tu CV en formato'
      primaryLogo={LogoEuropass}
      primaryLogoAltText='Logo de Europass'
    >
      <button className={classes.beginButton}>Descargar CV</button>
    </Card>
  );
};
