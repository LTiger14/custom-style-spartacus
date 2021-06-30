import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        productIntro: {
          module: () =>
            import(
              './custom/custom-product-intro/custom-product-intro.module'
            ).then((m) => m.CustomProductIntroModule),
          cmsComponents: ['ProductIntroComponent'],
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
