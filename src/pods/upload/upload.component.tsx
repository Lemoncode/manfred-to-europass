import React from 'react';
import LogoManfred from '@/core/assets/logo-manfred1.jpg';
import { Card } from '@/common/components';
import * as classes from './upload.container.styles';

export const Upload: React.FunctionComponent = () => {
  return (
    <Card
      title='Sube tu CV en formato'
      primaryLogo={LogoManfred}
      primaryLogoAltText='Logo de Manfred'
    >
     
      <button className={classes.uploadButton}>Subir CV</button>
        <h3 className={classes.footerText}>si necesitas ayuda puedes ver un tutorial aquí</h3>
    </Card>
  );
};