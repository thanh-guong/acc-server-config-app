import { DriverCategoryEnum } from "../enum/driver-category.enum";

export interface DriverInfo {
  firstName?: string;
  lastName?: string;
  shortName?: string;
  driverCategory?: DriverCategoryEnum;
  playerID: string;  // Steam ID
}

export interface Entry {
  drivers: DriverInfo[];
  raceNumber: number; // TODO validation between 1 and 998
  forcedCarModel: number; // TODO validation between -1 and car model max value
  overrideDriverInfo: 0 | 1;
  isServerAdmin: 0 | 1;
  defaultGridPosition?: number;
  ballastKg?: number; // TODO validation between 0 and 100
  restrictor?: number; // TODO validation between 0 and 20
  customCar?: string;
  overrideCarModelForCustomCar?: number;
}

export interface EntryList {
  entries: Entry[];
  forceEntryList: 0 | 1;
}
