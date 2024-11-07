import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Configure as rotas aqui, se necessário
    importProvidersFrom(AppRoutingModule, SocialLoginModule),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('SUA_CLIENT_ID_DO_GOOGLE'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
}).catch(err => console.error(err));
