import { Injectable } from '@angular/core';
import { ProductAdComponent } from './product-ad.component';
import { JobAdComponent } from './job-ad.component';
import { AdItem } from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }
  getAds() {
    return[
      new AdItem(ProductAdComponent, {name: 'Amazon alexa', description: 'Amazon\'s personal Home voice assistant', price: 380}),
      new AdItem(ProductAdComponent, {name: 'Google Home', description: 'Google\'s personal Home voice Assistant', price: 500}),
      new AdItem(JobAdComponent, {role: 'DevOps Engineer', description: 'Work with CI/CD and Cloud technologies', salary: 60000})
    ] 
  }
}
