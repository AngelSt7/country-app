import { Component } from '@angular/core';
import { HeroImageComponent, HeroContentComponent, FooterComponent } from "@/app/features/shared/components";

@Component({
  selector: 'app-home-page',
  imports: [HeroImageComponent, HeroContentComponent, FooterComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
