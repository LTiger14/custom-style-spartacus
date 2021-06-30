import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, I18nModule, provideConfig } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';
import { CustomProductIntroComponent } from './custom-product-intro.component';

@NgModule({
  imports: [CommonModule, I18nModule, StarRatingModule],
  declarations: [CustomProductIntroComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
      },
    }),
  ],
})
export class CustomProductIntroModule {}
