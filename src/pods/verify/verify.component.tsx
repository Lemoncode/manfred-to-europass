import React from 'react';
import LogoManfred from '@/core/assets/logo-manfred1.jpg';
import { Card } from '@/common/components';
import * as classes from './verify.container.styles';

export const Verify: React.FunctionComponent = () => {
  return (
    <Card
      title='Verificando formato'
      primaryLogo={LogoManfred}
      primaryLogoAltText='Logo de Manfred'
    >
      <button className={classes.verifyButton}></button>
      <button className={classes.cancelButton}>Cancelar</button>
    </Card>
  );
};