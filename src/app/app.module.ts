import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { ProductAdComponent } from './product-ad.component';
import { JobAdComponent } from './job-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdDirective,
    ProductAdComponent,
    JobAdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [ProductAdComponent, JobAdComponent]
})
export class AppModule { }
