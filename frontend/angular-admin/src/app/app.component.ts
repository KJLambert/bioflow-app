import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  organism = '';
  feature = '';
  start: number = 0;
  end: number = 0;
  results: any[] = [];

  constructor(private api: ApiService) {}

  search() {
    this.api.queryFeatures({
      organism: this.organism,
      feature: this.feature,
      start: this.start,
      end: this.end
    }).subscribe(data => this.results = data.results || []);
  }
}
