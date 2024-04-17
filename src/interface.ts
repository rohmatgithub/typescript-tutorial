export interface User {
  id: number;
  name: string;
  address?: string;
  readonly email: string;
}

export interface DataMaster {
  id: number;
  name: string;
  code?: string;
}

export interface DataDetail extends DataMaster {
  email: string;
  phone: string;
}
