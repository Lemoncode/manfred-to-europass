import React from 'react';
import { Card } from '@material-ui/core';

import * as classes from './CardComponentStyles';

export interface ICard {
  description: string;
  primaryLogo: string;
  primaryLogoAltText: string;
  optionalText?: string;
  secondaryLogo: string;
  secondayLogoAltText: string;
  buttonText: string;
  children?: React.ReactNode;
}

export const CardComponent = ({
  description,
  primaryLogo,
  primaryLogoAltText,
  optionalText,
  secondaryLogo,
  secondayLogoAltText,
  buttonText,
  children,
}: ICard) => {
  return (
    <Card className={classes.main}>
      <div className={classes.containerTitle1}>
        <h1 className={classes.title(139)}>{description}</h1>
      </div>
      <div className={classes.containerLogoManfred}>
        <img src={primaryLogo} alt={primaryLogoAltText} />
      </div>
      <div className={classes.containerTitle2}>
        <h3>{optionalText}</h3>
      </div>

      <img src={secondaryLogo} alt={secondayLogoAltText} />
      <div className={classes.buttonContainer}>
        <button className={classes.beginButton}>{buttonText}</button>
      </div>
      {children}
    </Card>
  );
};
