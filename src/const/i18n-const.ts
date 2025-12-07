import { DriverCategoryEnum } from "../app/enum/driver-category.enum";
import { FormationLapTypeEnum } from "../app/enum/formation-lap-type.enum";
import { QualifyStandingTypeEnum } from "../app/enum/qualify-standing-type.enum";
import { SessionTypeEnum } from "../app/enum/session-type.enum";
import { TrackMedalsRequirementEnum } from "../app/enum/track-medal-requirement.enum";

/**
 * i18n keys for labels and messages
 */
export const I18N_KEYS = {
    I18N_TEST: 'I18N_TEST',
    MESSAGE: {
        INFO: {
            INFO_TEST: 'MESSAGE.INFO.INFO_TEST',
        },
        DEBUG: {
            DEBUG_TEST: 'MESSAGE.DEBUG.DEBUG_TEST',
        },
        ERROR: {
            ERROR_TEST: 'MESSAGE.ERROR.ERROR_TEST',
        },
    },
    LABEL: {
        DRIVER_CATEGORY: {
            [DriverCategoryEnum.BRONZE]: 'LABEL.DRIVER_CATEGORY.BRONZE',
            [DriverCategoryEnum.SILVER]: 'LABEL.DRIVER_CATEGORY.SILVER',
            [DriverCategoryEnum.GOLD]: 'LABEL.DRIVER_CATEGORY.GOLD',
            [DriverCategoryEnum.PLATINUM]: 'LABEL.DRIVER_CATEGORY.PLATINUM',
        },
        FORMATION_LAP_TYPE: {
            [FormationLapTypeEnum.CLASSIC]: 'LABEL.FORMATION_LAP_TYPE.CLASSIC',
            [FormationLapTypeEnum.SHORT]: 'LABEL.FORMATION_LAP_TYPE.SHORT',
            [FormationLapTypeEnum.CUTSCENE]: 'LABEL.FORMATION_LAP_TYPE.CUTSCENE',
        },
        QUALIFY_STANDING_TYPE: {
            [QualifyStandingTypeEnum.FASTEST_LAP]: 'LABEL.QUALIFY_STANDING_TYPE.FASTEST_LAP',
            [QualifyStandingTypeEnum.AVERAGE_LAP]: 'LABEL.QUALIFY_STANDING_TYPE.AVERAGE_LAP',
        },
        SESSION_TYPE: {
            [SessionTypeEnum.PRACTICE]: 'LABEL.SESSION_TYPE.PRACTICE',
            [SessionTypeEnum.QUALIFY]: 'LABEL.SESSION_TYPE.QUALIFY',
            [SessionTypeEnum.RACE]: 'LABEL.SESSION_TYPE.RACE',
            [SessionTypeEnum.HOTSTINT]: 'LABEL.SESSION_TYPE.HOTSTINT',
            [SessionTypeEnum.FREE_PRACTICE]: 'LABEL.SESSION_TYPE.FREE_PRACTICE',
            [SessionTypeEnum.WARMUP]: 'LABEL.SESSION_TYPE.WARMUP',
        },
        TRACK_MEDALS_REQUIREMENT: {
            [TrackMedalsRequirementEnum.NONE]: 'LABEL.TRACK_MEDALS_REQUIREMENT.NONE',
            [TrackMedalsRequirementEnum.BRONZE]: 'LABEL.TRACK_MEDALS_REQUIREMENT.BRONZE',
            [TrackMedalsRequirementEnum.SILVER]: 'LABEL.TRACK_MEDALS_REQUIREMENT.SILVER',
            [TrackMedalsRequirementEnum.GOLD]: 'LABEL.TRACK_MEDALS_REQUIREMENT.GOLD',
        },

    },
};
