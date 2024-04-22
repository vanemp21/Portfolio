/// <reference types="@angular/localize" />


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

import { provideTranslation } from './app/providers/translation';

bootstrapApplication(AppComponent, {
  providers:[provideHttpClient(), provideTranslation()]
})
  .catch((err) => console.error(err));

