import { Component } from '@angular/core';
import { ProductIntroComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss'],
})
export class CustomProductIntroComponent extends ProductIntroComponent {}
