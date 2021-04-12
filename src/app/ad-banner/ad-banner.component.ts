import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy, ViewContainerRef } from '@angular/core';

import { AdDirective } from '../ad.directive';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  @Input() ads: AdItem[];

  currentAdIndex = -1;

  @ViewChild(AdDirective) adHost: AdDirective;

  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1)%this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContianerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    },3000);
  }
  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
