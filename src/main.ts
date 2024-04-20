/// <reference types="@angular/localize" />


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';

import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers:[provideHttpClient(withInterceptorsFromDi())]
})
  .catch((err) => console.error(err));

