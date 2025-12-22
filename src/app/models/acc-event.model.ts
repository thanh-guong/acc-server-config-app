import { DayOfWeekendEnum } from "../enum/day-of-weekend-enum";
import { QualifyStandingTypeEnum } from "../enum/qualify-standing-type.enum";
import { SessionTypeEnum } from "../enum/session-type.enum";
import { TrackNameEnum } from "../enum/track-name.enum";

export interface EventSession {
  hourOfDay: number; // TODO validation between 0 and 23
  dayOfWeekend: DayOfWeekendEnum; // TODO validation between 1 and 3
  timeMultiplier: number; // TODO validation between 0 and 24
  sessionType: SessionTypeEnum;
  sessionDurationMinutes: number;
}

export interface EventConfig {
  track: TrackNameEnum;
  preRaceWaitingTimeSeconds: number; // TODO validation above 30
  sessionOverTimeSeconds: number;
  ambientTemp: number; // Obsolete: Track temperatures are always simulated based on ambient temperature, sun angle, clouds and other aspects
  cloudLevel: number; // TODO validation between 0.0 and 1.0
  rain: number; // TODO validation between 0.0 and 1.0
  weatherRandomness: number; // TODO validation between 0 and 7
  configVersion: number;
  sessions: EventSession[];
}

export interface EventRules {
  qualifyStandingType: QualifyStandingTypeEnum;
  pitWindowLengthSec: number; // TODO validation above -1
  driverStintTimeSec: number; // TODO validation above -1
  mandatoryPitstopCount: number;
  maxTotalDrivingTime: number; // TODO validation above -1
  maxDriversCount: number;
  isRefuellingAllowedInRace: boolean;
  isRefuellingTimeFixed: boolean;
  isMandatoryPitstopRefuellingRequired: boolean;
  isMandatoryPitstopTyreChangeRequired: boolean;
  isMandatoryPitstopSwapDriverRequired: boolean;
  tyreSetCount: number; // Experimental/not supported: Can be used to reduce the amount of tyre sets any car entry has for the entire weekend. Please note that it is necessary to force cars to remain in the server, or drastically reduced tyre sets will be ineffective, as rejoining will reset the tyre sets.
}
