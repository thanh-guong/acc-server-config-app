import { CarGroupsEnum } from "../enum/car-groups.enum";
import { FormationLapTypeEnum } from "../enum/formation-lap-type.enum";
import { TrackMedalsRequirementEnum } from "../enum/track-medal-requirement.enum";

export interface AccSettings {
  serverName: string;
  adminPassword: string;
  carGroup: CarGroupsEnum;
  trackMedalsRequirement: TrackMedalsRequirementEnum;
  safetyRatingRequirement: number;
  racecraftRatingRequirement: number;
  password?: string;
  spectatorPassword?: string;
  maxCarSlots: number;
  dumpLeaderboards: 0 | 1;
  isRaceLocked: 0 | 1;
  randomizeTrackWhenEmpty: 0 | 1;
  centralEntryListPath?: string;
  allowAutoDQ: 0 | 1;
  shortFormationLap: 0 | 1;
  dumpEntryList: 0 | 1;
  formationLapType: FormationLapTypeEnum;
}
