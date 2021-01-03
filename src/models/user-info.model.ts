export interface UserInfo {
  city: string;
  country: string;
  countryCode: string;
  deviceType: string;
  img: string;
  ip: string;
  lat: number;
  lon: number;
  os?: string;
  os_version?: string;
  browser?: string;
  location?: Location;
}

export interface Location {
  type: string;
  coordinates: number[];
}

export interface AnsweredUser {
  flagUrl: string;
  ip: string;
  country: string;
  city: string;
}

export interface AnsweredGroupedUser {
  flagUrl: string;
  country: string;
  city: string;
  count: number;
}
