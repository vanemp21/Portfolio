import { ApplicationConfig } from '@angular/core';
import { provideTranslation } from './providers/translation';

export const appConfig: ApplicationConfig = {
  providers: [provideTranslation()],
};
