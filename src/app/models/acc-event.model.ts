import { QualifyStandingTypeEnum } from "../enum/qualify-standing-type.enum";
import { SessionTypeEnum } from "../enum/session-type.enum";
import { TrackNameEnum } from "../enum/track-name.enum";

export interface EventSession {
  hourOfDay: number;
  dayOfWeekend: number;
  timeMultiplier: number;
  sessionType: SessionTypeEnum;
  sessionDurationMinutes: number;
}

export interface EventConfig {
  track: TrackNameEnum;
  preRaceWaitingTimeSeconds: number;
  sessionOverTimeSeconds: number;
  ambientTemp: number;
  cloudLevel: number;
  rain: number;
  weatherRandomness: number;
  configVersion: number;
  sessions: EventSession[];
}

export interface EventRules {
  qualifyStandingType: QualifyStandingTypeEnum;
  pitWindowLengthSec: number;
  driverStintTimeSec: number;
  mandatoryPitstopCount: number;
  maxTotalDrivingTime: number;
  maxDriversCount: number;
  isRefuellingAllowedInRace: boolean;
  isRefuellingTimeFixed: boolean;
  isMandatoryPitstopRefuellingRequired: boolean;
  isMandatoryPitstopTyreChangeRequired: boolean;
  isMandatoryPitstopSwapDriverRequired: boolean;
  tyreSetCount: number;
}
