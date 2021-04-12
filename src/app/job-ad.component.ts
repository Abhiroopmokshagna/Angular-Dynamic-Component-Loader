import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
    template: `
      <div class="job-ad">

        <h3>Be part of our success story</h3>

        <h4>{{data.role}}</h4>
  
        {{data.description}}

        {{data.salary | currency}}
      </div>
    `,
    styleUrls: ['../assets/sample.css']
  })
export class JobAdComponent implements AdComponent{
    @Input() data: any;
}