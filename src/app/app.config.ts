import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTranslation } from './providers/translation';

export const appConfig: ApplicationConfig = {
  providers: [provideTranslation()],
};
