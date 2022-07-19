import React from 'react'
import { Card as CardMUI } from '@material-ui/core'

import * as classes from './card.component.styles'

export interface Props {
  title: string
  primaryLogo: string
  primaryLogoAltText: string
  children?: React.ReactNode
}

export const Card: React.FunctionComponent<Props> = (props) => {
  const { title, primaryLogo, primaryLogoAltText, children } = props
  return (
    <CardMUI className={classes.main}>
      <h1 className={classes.title}>{title}</h1>

      <img src={primaryLogo} alt={primaryLogoAltText} />

      {children}
    </CardMUI>
  )
}
