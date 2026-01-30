import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination.model';
import { DestinationDTO } from '../models/destination.dto';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(page: number, size: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/destinations?page=${page}&size=${size}`);
  }

  search(keyword: string): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/search?keyword=${keyword}`);
  }

  markWantToVisit(destinationId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/destinations/${destinationId}/want-to-visit?userId=${userId}`, {});
  }

  adminFetchDestinations(): Observable<DestinationDTO[]> {
    return this.http.get<DestinationDTO[]>(`${this.apiUrl}/admin/fetch-destinations`);
  }

  adminAddDestination(dto: DestinationDTO): Observable<Destination> {
    return this.http.post<Destination>(`${this.apiUrl}/admin/destinations`, dto);
  }

  adminBulkAdd(list: DestinationDTO[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/destinations/bulk`, list);
  }

  adminDelete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/destinations/${id}`);
  }
  getAllDestinations(): Observable<DestinationDTO[]> {
  return this.http.get<DestinationDTO[]>(`${this.apiUrl}/admin/destinations/all`);
}
}
