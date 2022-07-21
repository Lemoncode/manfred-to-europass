import React from 'react';
import LogoManfred from '@/core/assets/logo-manfred1.jpg';
import { Card } from '@/common/components';
import * as classes from './uploading.container.styles';

export const Uploading: React.FunctionComponent = () => {
  return (
    <Card
      title='Subiendo CV'
      primaryLogo={LogoManfred}
      primaryLogoAltText='Logo de Manfred'
    >
       <button className={classes.uploadingButton}></button>
      <button className={classes.cancelButton}>Cancelar</button>
     
    </Card>
  );
};