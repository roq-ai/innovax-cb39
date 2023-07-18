import { OrganizationInterface } from 'interfaces/organization';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface ConnectionInterface {
  id?: string;
  organization_id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  startup?: StartupInterface;
  _count?: {};
}

export interface ConnectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  startup_id?: string;
}
