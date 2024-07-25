import { Component } from '@angular/core';
import { UnsplashService } from './unsplash.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  result: any;
  constructor(private unsplash: UnsplashService) {}

  ngOnInit() {
    this.onClick();
  }
  onClick() {
    this.unsplash.fetchImage().subscribe((response: any) => {
      this.result = response.urls.regular;
    });
  }
}
