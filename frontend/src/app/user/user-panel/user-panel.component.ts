import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { DestinationDTO } from '../../models/destination.dto';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  destinations: DestinationDTO[] = [];
  keyword: string = '';
  page = 0;
  size = 10;
  totalPages = 0;

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.fetchDestinations();
  }

  fetchDestinations(): void {
    this.destinationService.getAll(this.page, this.size).subscribe(
      (res: any) => {
        this.destinations = res.content;
        this.totalPages = res.totalPages;
      },
      err => console.error(err)
    );
  }

  search(): void {
    if (this.keyword.trim() === '') {
      this.page = 0;
      this.fetchDestinations();
      return;
    }
    this.destinationService.search(this.keyword).subscribe(
      (res: DestinationDTO[]) => this.destinations = res,
      err => console.error(err)
    );
  }

  markWantToVisit(destId?: number): void {
    if (!destId) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    const userId = JSON.parse(atob(token.split('.')[1])).userId; // decode JWT

    this.destinationService.markWantToVisit(destId, userId).subscribe(
      res => alert('Marked as "Want to Visit"!'),
      err => console.error(err)
    );
  }

  nextPage(): void {
    if (this.page + 1 < this.totalPages) {
      this.page++;
      this.fetchDestinations();
    }
  }

  prevPage(): void {
    if(this.page > 0) {
      this.page--;
      this.fetchDestinations();
    }
  }

}
