import { User } from './user.model';
import { Destination } from './destination.model';

export interface UserDestination {
  id?: number;
  user: User;
  destination: Destination;
  wantToVisit: boolean;
}
