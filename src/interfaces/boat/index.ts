import { RentalInterface } from 'interfaces/rental';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface BoatInterface {
  id?: string;
  name: string;
  price: number;
  availability?: boolean;
  platform_id?: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  platform?: PlatformInterface;
  _count?: {
    rental?: number;
  };
}

export interface BoatGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  platform_id?: string;
}
