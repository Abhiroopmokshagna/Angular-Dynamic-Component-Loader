import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
    template: `
      <div class="product-ad">

        <h3>Check out our products</h3>

        <h4>{{data.name}} only at {{data.price | currency}}</h4>
        <p>{{data.description}}</p>

        <strong>Own one today!</strong>
      </div>
    `,
    styleUrls: ['../assets/sample.css']
  })
export class ProductAdComponent implements AdComponent{
    @Input() data: any;
}