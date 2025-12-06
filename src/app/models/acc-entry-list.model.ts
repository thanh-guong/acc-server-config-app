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
  raceNumber: number;
  forcedCarModel: number;
  overrideDriverInfo: 0 | 1;
  isServerAdmin: 0 | 1;
  defaultGridPosition?: number;
  ballastKg?: number;
  restrictor?: number;
  customCar?: string;
  overrideCarModelForCustomCar?: number;
}

export interface EntryList {
  entries: Entry[];
  forceEntryList: 0 | 1;
}
