import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, LandmarkIcon, FlagIcon, Globe } from 'lucide-angular';

@Component({
  selector: 'country-top-menu',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
})

export class TopMenuComponent {
  readonly menuItems = [
    { label: 'Por Capital', icon: LandmarkIcon, route: '/country/by-capital' },
    { label: 'Por País', icon: FlagIcon, route: '/country/by-country' },
    { label: 'Por Región', icon: Globe, route: '/country/by-region' },
  ];
}
