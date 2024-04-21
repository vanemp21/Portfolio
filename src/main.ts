/// <reference types="@angular/localize" />


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { provideTranslation } from './app/providers/translation';

bootstrapApplication(AppComponent, {
  providers:[provideHttpClient(), provideTranslation()]
})
  .catch((err) => console.error(err));

