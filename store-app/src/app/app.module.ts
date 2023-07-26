import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { appInterceptorProvider } from './shared/interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FeatureModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
