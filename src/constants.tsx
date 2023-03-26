export const lengthUnits: Unit[] = ["mm", "cm", "m", "in", "ft", "mi"];
export const areaUnits: Unit[] = ["m2", "ha", "ft2", "ac"];
export const massUnits: Unit[] = ["g", "kg", "mt", "oz", "lb", "t"];
export const volumeUnits: Unit[] = ["ml", "l", "fl-oz", "gal"];
export const volumeFlowRateUnits: Unit[] = ["l/min", "l/h", "gal/min", "gal/h"];
export const timeUnits: Unit[] = ["min", "h", "d", "week", "month", "year"];

export const unitSets = [
  lengthUnits,
  areaUnits,
  massUnits,
  volumeUnits,
  volumeFlowRateUnits,
  timeUnits,
];

export const allUnits = [
  ...lengthUnits,
  ...areaUnits,
  ...massUnits,
  ...volumeUnits,
  ...volumeFlowRateUnits,
  ...timeUnits,
];

export type Unit =
  | "mm"
  | "cm"
  | "m"
  | "in"
  | "ft"
  | "mi"
  | "m2"
  | "ha"
  | "ft2"
  | "ac"
  | "g"
  | "kg"
  | "mt"
  | "oz"
  | "lb"
  | "t"
  | "ml"
  | "l"
  | "fl-oz"
  | "gal"
  | "l/min"
  | "l/h"
  | "gal/min"
  | "gal/h"
  | "min"
  | "h"
  | "d"
  | "week"
  | "month"
  | "year";
