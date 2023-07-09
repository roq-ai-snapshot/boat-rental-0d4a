import { BoatInterface } from 'interfaces/boat';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  boat_id?: string;
  user_id?: string;
  start_date: any;
  end_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  boat?: BoatInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  boat_id?: string;
  user_id?: string;
  status?: string;
}
