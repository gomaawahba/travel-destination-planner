import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { DestinationDTO } from '../../models/destination.dto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  destinations: DestinationDTO[] = [];

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.fetchDestinations();
  }

  fetchDestinations(): void {
    this.destinationService.adminFetchDestinations().subscribe(
      (res: DestinationDTO[]) => this.destinations = res,
      err => console.error(err)
    );
  }

  deleteDestination(id?: number): void {
    if (!id) return;
    this.destinationService.adminDelete(id).subscribe(
      res => {
        alert('Destination deleted!');
        this.fetchDestinations();
      },
      err => console.error(err)
    );
  }
}
