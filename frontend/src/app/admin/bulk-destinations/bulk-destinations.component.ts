import { Component } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { DestinationDTO } from '../../models/destination.dto';

@Component({
  selector: 'app-bulk-destinations',
  templateUrl: './bulk-destinations.component.html',
  styleUrls: ['./bulk-destinations.component.css']
})
export class BulkDestinationsComponent {

  // مصفوفة لتخزين الديستينشنز
  destinations: DestinationDTO[] = [
    { country: '', capital: '', region: '', population: 0, currency: '', flagUrl: '' }
  ];

  constructor(private destinationService: DestinationService) { }

  // لإضافة row جديدة
  addRow() {
    this.destinations.push({ country: '', capital: '', region: '', population: 0, currency: '', flagUrl: '' });
  }

  // لحذف row
  removeRow(index: number) {
    this.destinations.splice(index, 1);
  }

  // لإرسال كل الديستينشنز للـ API
  addBulkDestinations() {
    // تحقق من أن كل الحقول مش فاضية
    for (let dest of this.destinations) {
      if (!dest.country || !dest.capital || !dest.region || !dest.population || !dest.currency || !dest.flagUrl) {
        alert('Please fill all fields for each destination!');
        return;
      }
    }

    this.destinationService.adminBulkAdd(this.destinations).subscribe({
      next: () => {
        alert('Destinations added successfully!');
        this.destinations = [{ country: '', capital: '', region: '', population: 0, currency: '', flagUrl: '' }]; // إعادة تهيئة الفورم
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add destinations!');
      }
    });
  }
}
