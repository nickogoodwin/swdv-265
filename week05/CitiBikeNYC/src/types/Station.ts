export interface Station {
  station_type: string;
  short_name: string;
  lon: number;
  rental_methods: string[];
  legacy_id: number;
  capacity: number;
  has_kiosk: boolean;
  name: string;
  external_id: string;
  eightd_station_services: [];
  station_id: string;
  region_id: number;
  eightd_has_key_dispenser: boolean;
  electric_bike_surcharge_waiver: boolean;
  lat: number;
  rental_uris: {
    android: string;
    ios: string;
  };
}
