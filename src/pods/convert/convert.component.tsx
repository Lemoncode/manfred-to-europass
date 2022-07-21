import React from 'react';
import LogoEuropass from '@/core/assets/logo-europass.jpg';
import { Card } from '@/common/components';
import * as classes from './convert.container.styles';

export const Convert: React.FunctionComponent = () => {
  return (
    <Card
      title='Convirtiendo a formato'
      primaryLogo={LogoEuropass}
      primaryLogoAltText='Logo de Europass'
    >
      <button className={classes.convertButton}></button>
      <button className={classes.cancelButton}>Cancelar</button>
    </Card>
  );
};