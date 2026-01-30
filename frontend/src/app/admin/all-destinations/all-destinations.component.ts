import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { DestinationDTO } from '../../models/destination.dto';

@Component({
  selector: 'app-all-destinations',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.css']
})
export class AllDestinationsComponent implements OnInit {

  destinations: DestinationDTO[] = [];

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationService.getAllDestinations().subscribe(
      res => this.destinations = res,
      err => console.error(err)
    );
  }

  deleteDestination(id: number) {
  if (!confirm('Are you sure you want to delete this destination?')) return;

  this.destinationService.adminDelete(id).subscribe({
    next: () => {
      this.destinations = this.destinations.filter(d => d.id !== id);
      alert('Destination deleted successfully');
    },
    error: err => {
      console.error(err);
      alert('Failed to delete destination');
    }
  });
}
}
