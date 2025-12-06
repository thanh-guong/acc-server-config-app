export interface AssistRules {
  stabilityControlLevelMax: number; // TODO validation between 0 and 100?
  disableAutosteer: number;
  disableAutoLights: number;
  disableAutoWiper: number;
  disableAutoEngineStart: number;
  disableAutoPitLimiter: number;
  disableAutoGear: number;
  disableAutoClutch: number;
  disableIdealLine: number;
}
