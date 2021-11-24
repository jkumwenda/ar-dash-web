import { number } from "yup/lib/locale";

export interface APICache {
  endpoint: string;
  lastAccessTime: number;
}

export interface Role {
  role_id: number;
  role: string;
}

export interface Instance {
  organisation_name: string;
  postal_address: string;
  email_address: string;
  folder_fs_path: string;
}

export interface Space {
  space_id: number;
  space: string;
  instance_id: number;
}

export interface Phase {
  phase_id: number;
  phase: number;
  instance_id: number;
}

export interface BuildingType {
  building_type_id: number;
  building_type: string;
  instance_id: number;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  is_active: boolean;
}

export interface Client {
  client_id: number;
  postal_address: string;
  phone_number: string;
  user_id: number;
  instance_id: number;
  user: User;
}

export interface District {
  district_id: number;
  district: string;
}

export interface Location {
  location_id: number;
  location: string;
  district_id: number;
  instance_id: number;
  district: District;
}

export interface Status {
  status_id: number;
  status: string;
  instance_id: number;
}

export interface Project {
  project_id: number;
  project_manager: number;
  client_id: number;
  building_type_id: number;
  location_id: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status_id: number;
  instance_id: number;
  client: Client;
  building_type: BuildingType;
  location: Location;
  instance: Instance;
  status: Status;
  manager: User;
}

export interface PaginatedResults<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}
