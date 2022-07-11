import React from 'react';
import { RouterComponent } from '@/core/routes/router.component';
import { ThemeProviderComponent } from 'core/theme';

export const App = () => {
  return (
    <ThemeProviderComponent>
      <RouterComponent />
    </ThemeProviderComponent>
  );
};
3;
