import { Component } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  keyword: string = '';
  results: Destination[] = [];

  constructor(private destinationService: DestinationService) {}

  search() {
    if (!this.keyword.trim()) return;
    this.destinationService.search(this.keyword).subscribe({
      next: (data) => this.results = data,
      error: (err) => console.error(err)
    });
  }
}
