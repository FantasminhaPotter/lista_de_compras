import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // Adicione outros componentes não standalone aqui, se houver
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
  ],
  providers: [
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
})
export class AppModule {}
