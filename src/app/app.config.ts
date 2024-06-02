import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './shared/interceptors/api.interceptor';
import { NgxSmartModalModule } from 'ngx-smart-modal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    importProvidersFrom(NgxSmartModalModule.forRoot())
  ]
};
