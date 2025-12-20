import { CarGroupsEnum } from "../app/enum/car-groups.enum";
import { FormationLapTypeEnum } from "../app/enum/formation-lap-type.enum";
import { QualifyStandingTypeEnum } from "../app/enum/qualify-standing-type.enum";
import { SessionTypeEnum } from "../app/enum/session-type.enum";
import { TrackMedalsRequirementEnum } from "../app/enum/track-medal-requirement.enum";
import { TrackNameEnum } from "../app/enum/track-name.enum";

export const ACC_CONFIGURATION_VALUES = {
    udpPort: {
        minValue: 1,
        maxValue: 65535,
        defaultValue: 9600, // TODO CHECK
    },
    tcpPort: {
        minValue: 1,
        maxValue: 65535,
        defaultValue: 9600, // TODO CHECK
    },
    maxConnections: {
        minValue: 1,
        maxValue: 1000,
        defaultValue: 10,
    },
    lanDiscovery: {
        defaultValue: 1,
    },
    registerToLobby: {
        defaultValue: 1,
    },
    publicIP: {
        defaultValue: undefined,
    },
    configVersion: {
        defaultValue: 1,
    },
};

export const ACC_SETTINGS_VALUES = {
    serverName: {
        defaultValue: '',
    },
    adminPassword: {
        defaultValue: '',
    },
    carGroup: {
        defaultValue: CarGroupsEnum.FREE_FOR_ALL,
    },
    trackMedalsRequirement: {
        defaultValue: TrackMedalsRequirementEnum.NONE,
    },
    safetyRatingRequirement: {
        defaultValue: 0,
        minValue: 0,
        maxValue: 99,
    },
    racecraftRatingRequirement: {
        defaultValue: 0,
        minValue: 0,
        maxValue: 99,
    },
    password: {
        defaultValue: undefined,
    },
    spectatorPassword: {
        defaultValue: undefined,
    },
    maxCarSlots: {
        defaultValue: 20,
        minValue: 1,
        maxValue: 100,
    },
    dumpLeaderboards: {
        defaultValue: 0 as 0 | 1,
    },
    isRaceLocked: {
        defaultValue: 0 as 0 | 1,
    },
    randomizeTrackWhenEmpty: {
        defaultValue: 0 as 0 | 1,
    },
    centralEntryListPath: {
        defaultValue: undefined,
    },
    allowAutoDQ: {
        defaultValue: 1 as 0 | 1,
    },
    shortFormationLap: {
        defaultValue: 0 as 0 | 1,
    },
    dumpEntryList: {
        defaultValue: 0 as 0 | 1,
    },
    formationLapType: {
        defaultValue: FormationLapTypeEnum.CLASSIC,
    },
};

export const ASSIST_RULES_VALUES = {
    stabilityControlLevelMax: {
        defaultValue: 100,
        minValue: 0,
        maxValue: 100,
    },
    disableAutosteer: {
        defaultValue: 0 as 0 | 1,
    },
    disableAutoLights: {
        defaultValue: 0 as 0 | 1,
    },
    disableAutoWiper: {
        defaultValue: 0 as 0 | 1,
    },
    disableAutoEngineStart: {
        defaultValue: 0 as 0 | 1,
    },
    disableAutoPitLimiter: {
        defaultValue: 0 as 0 | 1,
    },
    disableAutoGear: {
        defaultValue: 0 as 0 | 1,
    },
    disableAutoClutch: {
        defaultValue: 0 as 0 | 1,
    },
    disableIdealLine: {
        defaultValue: 0 as 0 | 1,
    },
};

export const EVENT_RULES_VALUES = {
    qualifyStandingType: {
        defaultValue: QualifyStandingTypeEnum.FASTEST_LAP,
    },
    pitWindowLengthSec: {
        defaultValue: -1,
        minValue: -1,
    },
    driverStintTimeSec: {
        defaultValue: -1,
        minValue: -1,
    },
    mandatoryPitstopCount: {
        defaultValue: 0,
        minValue: 0,
    },
    maxTotalDrivingTime: {
        defaultValue: -1,
        minValue: -1,
    },
    maxDriversCount: {
        defaultValue: 1,
        minValue: 1,
    },

    isRefuellingAllowedInRace: {
        defaultValue: true as boolean,
    },
    isRefuellingTimeFixed: {
        defaultValue: false as boolean,
    },
    isMandatoryPitstopRefuellingRequired: {
        defaultValue: false as boolean,
    },
    isMandatoryPitstopTyreChangeRequired: {
        defaultValue: false as boolean,
    },
    isMandatoryPitstopSwapDriverRequired: {
        defaultValue: false as boolean,
    },
    tyreSetCount: {
        defaultValue: 1,
        minValue: 1,
        maxValue: 50,
    },
};

export const EVENT_VALUES = {
    track: {
        defaultValue: TrackNameEnum.SPA,
    },

    preRaceWaitingTimeSeconds: {
        defaultValue: 60,
        minValue: 30,
    },

    sessionOverTimeSeconds: {
        defaultValue: 120,
        minValue: 0,
    },

    ambientTemp: {
        defaultValue: 20,
    },

    cloudLevel: {
        defaultValue: 0.3,
        minValue: 0,
        maxValue: 1,
    },

    rain: {
        defaultValue: 0.0,
        minValue: 0,
        maxValue: 1,
    },

    weatherRandomness: {
        defaultValue: 0,
        minValue: 0,
        maxValue: 7,
    },

    configVersion: {
        defaultValue: 1,
    },

    postQualySeconds: {
        defaultValue: 30,
        minValue: 1,
    },

    postRaceSeconds: {
        defaultValue: 30,
        minValue: 1,
    },

    /* TODO manage these default values for sessions
    sessions: {
        defaultValue: [
            {
                hourOfDay: 10,
                dayOfWeekend: 1,
                timeMultiplier: 1,
                sessionType: SessionTypeEnum.FREE_PRACTICE,
                sessionDurationMinutes: 20,
            },
            {
                hourOfDay: 17,
                dayOfWeekend: 2,
                timeMultiplier: 8,
                sessionType: SessionTypeEnum.QUALIFY,
                sessionDurationMinutes: 10,
            },
            {
                hourOfDay: 16,
                dayOfWeekend: 3,
                timeMultiplier: 3,
                sessionType: SessionTypeEnum.RACE,
                sessionDurationMinutes: 20,
            },
        ],
    },
    */
};
